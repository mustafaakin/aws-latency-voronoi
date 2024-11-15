let width = window.innerWidth;
let height = window.innerHeight;
let svg, projection, path, g;
let voronoiGroup, linksGroup;
let zoom;
let useLatencyVoronoi = false;


const regionColors = {
    'af-south-1': '#FF9999',     // Lighter red
    'ap-east-1': '#FFD199',      // Lighter orange
    'ap-northeast-1': '#FFFF99',  // Lighter yellow
    'ap-northeast-2': '#99FF99',  // Lighter green
    'ap-northeast-3': '#99FFFF',  // Lighter cyan
    'ap-south-1': '#9999FF',     // Lighter blue
    'ap-southeast-1': '#FF99FF',  // Lighter purple
    'ap-southeast-2': '#FFB3B3',  // Lighter pink
    'ca-central-1': '#CCFF99',   // Lighter lime
    'eu-central-1': '#99CCFF',   // Lighter sky blue
    'eu-north-1': '#FFE5CC',     // Lighter beige
    'eu-south-1': '#E5CCFF',     // Lighter lavender
    'eu-west-1': '#99FFE5',      // Lighter mint
    'eu-west-2': '#FFB3E5',      // Lighter rose
    'eu-west-3': '#E5E5B3',      // Lighter olive
    'me-south-1': '#B3FFE5',     // Lighter seafoam
    'sa-east-1': '#FFB3CC',      // Lighter mauve
    'us-east-1': '#E5CCCC',      // Lighter brown
    'us-east-2': '#CCE5E5',      // Lighter teal
    'us-west-1': '#CCCCE5',      // Lighter periwinkle
    'us-west-2': '#FFE5E5'       // Lighter salmon
};

// Color scale for latency lines
const latencyColorScale = d3.scaleSequential(d3.interpolateRdYlGn)
    .domain([400, 0]); // High latency (red) to low latency (green)

// Initialize the map
async function initMap() {
    // Create SVG
    svg = d3.select('#map-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create zoom behavior
    // zoom = d3.zoom()
    //    .scaleExtent([1, 8])
    //    .on('zoom', zoomed);

    // Apply zoom to svg
    // svg.call(zoom);

    // Create main container group that will be zoomed
    const container = svg.append('g');

    // Create projection
    projection = d3.geoMercator()
        .scale((width) / (2 * Math.PI))
        .translate([width / 2, height / 2]);

    path = d3.geoPath().projection(projection);

    // Create groups for map, voronoi, and links with specific order
    g = container.append('g').attr('class', 'base-map');
    linksGroup = container.append('g').attr('class', 'links-layer');
    voronoiGroup = container.append('g').attr('class', 'voronoi-layer');
    const pointsGroup = container.append('g').attr('class', 'points-layer');

    // Load world map data
    const world = await d3.json('https://unpkg.com/world-atlas@2/countries-110m.json');
    const land = topojson.feature(world, world.objects.land);
    const borders = topojson.mesh(world, world.objects.countries);

    // Draw base map
    g.append('path')
        .datum(land)
        .attr('class', 'land')
        .attr('d', path)
        .attr('fill', '#f8f8f8')
        .attr('stroke', '#fff')
        .attr('stroke-width', '0.5px');

    g.append('path')
        .datum(borders)
        .attr('class', 'borders')
        .attr('d', path)
        .attr('fill', 'none')
        .attr('stroke', '#ddd')
        .attr('stroke-width', '0.5px');

    // Add attribution
    d3.select('#map-container')
        .append('div')
        .attr('class', 'attribution')
        .html('Created by <a href="https://www.linkedin.com/in/mustafaakin/" target="_blank">🇹🇷 Mustafa Akın</a> with Cursor');

    // Add project information
    d3.select('#map-container')
        .append('div')
        .attr('class', 'project-info')
        .html(`
            <h3>AWS Latency Map</h3>
            <p>Explore AWS regions and their pairwise latencies visualized through 
            <a href="https://en.wikipedia.org/wiki/Voronoi_diagram" target="_blank">Voronoi diagrams</a>.
            Data sourced from <a href="https://www.cloudping.co/" target="_blank">CloudPing</a>. Source code available on <a href="https://github.com/mustafaakin/aws-latency-voronoi" target="_blank">GitHub</a>.</p>
            <div class="voronoi-toggle">
                <div class="radio-group">
                    <input type="radio" id="distanceVoronoi" name="voronoiType" value="distance" checked>
                    <label for="distanceVoronoi">Euclidean Voronoi (<i>Fast</i>)</label>
                </div>
                <div class="radio-group">
                    <input type="radio" id="latencyVoronoi" name="voronoiType" value="latency">
                    <label for="latencyVoronoi">Latency-based Approx (<i>Slow</i>)</label>
                </div>
            </div>
        `);

    // Replace the toggle event listener with radio button event listeners
    d3.selectAll('input[name="voronoiType"]').on('change', function () {
        useLatencyVoronoi = this.value === 'latency';
        drawVoronoi();
    });

    // Draw Voronoi diagram
    drawVoronoi();

    // Add points and labels for AWS regions
    drawRegionPoints(pointsGroup);

    // Add arrow marker definition to SVG
    addArrowMarker();
}

// Zoom handler
function zoomed(event) {
    const { transform } = event;
    g.attr('transform', transform);
    voronoiGroup.attr('transform', transform);
    linksGroup.attr('transform', transform);

    // Scale points and text based on zoom level
    g.selectAll('.region-point')
        .attr('r', 4 / transform.k);

    g.selectAll('.region-interaction-layer')
        .attr('r', 10 / transform.k);

    g.selectAll('.label, .label-bg')
        .style('font-size', `${10 / transform.k}px`)
        .attr('stroke-width', 3 / transform.k);

    // Scale the stroke width of paths
    linksGroup.selectAll('.latency-link')
        .attr('stroke-width', 2 / transform.k);

    // Scale the text of latency labels
    linksGroup.selectAll('text')
        .style('font-size', `${10 / transform.k}px`)
        .attr('stroke-width', 3 / transform.k);
}

function drawVoronoi() {
    if (useLatencyVoronoi) {
        drawLatencyVoronoi();
    } else {
        drawDistanceVoronoi();
    }
}

function drawDistanceVoronoi() {
    const points = awsRegions.map(region => projection(region.coordinates));
    const delaunay = d3.Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, width, height]);

    voronoiGroup.selectAll('*').remove();

    voronoiGroup.selectAll('path')
        .data(awsRegions)
        .join('path')
        .attr('class', 'region-cell')
        .attr('d', (d, i) => voronoi.renderCell(i))
        .attr('fill', d => regionColors[d.name])
        .attr('stroke', '#666')
        .attr('stroke-width', 0.5)
        .attr('stroke-opacity', 0.3)
        .attr('fill-opacity', 0.8)
        .on('mouseover', (event) => {
            d3.select(event.target).style('fill-opacity', 0.7);
        })
        .on('mouseout', (event) => {
            d3.select(event.target).style('fill-opacity', 0.5);
        });
}

// Start of Selection
function drawLatencyVoronoi() {
    const resolution = 7;
    voronoiGroup.selectAll('*').remove(); // Clear existing elements first

    // Pre-calculate all region data once
    const regionData = awsRegions.map(region => {
        const coords = region.coordinates;
        const latencies = Object.values(region.latencies);
        const avgLatency = latencies.reduce((a, b) => a + b, 0) / latencies.length;
        const projected = projection(coords);
        return {
            name: region.name,
            coords,
            avgLatency,
            x: projected[0],
            y: projected[1]
        };
    });

    // Create quadtree for efficient spatial indexing
    const quadtree = d3.quadtree()
        .x(d => d.x)
        .y(d => d.y)
        .addAll(regionData);

    const gridPoints = [];

    // Generate grid points and determine closest region based on weighted latency
    for (let x = 0; x < width; x += resolution) {
        for (let y = 0; y < height; y += resolution) {
            const geoCoord = projection.invert([x, y]);
            if (!geoCoord) continue; // Skip invalid coordinates
            
            let minLatency = Infinity;
            let closestRegion = null;

            // Search through all regions to find closest
            regionData.forEach(region => {
                const distance = d3.geoDistance(geoCoord, region.coords);
                const weightedLatency = region.avgLatency * distance;
                
                if (weightedLatency < minLatency) {
                    minLatency = weightedLatency;
                    closestRegion = region.name;
                }
            });

            if (closestRegion) {
                gridPoints.push({
                    x,
                    y,
                    region: closestRegion
                });
            }
        }
    }

    // Create grid cells using D3
    voronoiGroup.selectAll('rect')
        .data(gridPoints)
        .join('rect')
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .attr('width', resolution)
        .attr('height', resolution)
        .attr('fill', d => regionColors[d.region])
        .attr('stroke', 'none')
        .attr('fill-opacity', 0.25)
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('fill-opacity', 0.5);
        })
        .on('mouseout', function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('fill-opacity', 0.25);
        });
    
}


function drawRegionPoints(pointsGroup) {
    // Create a group for each region that includes both the point and an invisible interaction area
    const regionGroups = pointsGroup.selectAll('.region-group')
        .data(awsRegions)
        .join('g')
        .attr('class', 'region-group')
        .attr('transform', d => `translate(${projection(d.coordinates)})`); // Move to projection directly

    // Add invisible larger circle for better hover interaction
    regionGroups.append('circle')
        .attr('class', 'region-interaction-layer')
        .attr('r', 10)
        .on('mouseover', showLatencyLinks)
        .on('mouseout', hideLatencyLinks);

    // Add visible region points
    regionGroups.append('circle')
        .attr('class', 'region-point')
        .attr('r', 4)
        .attr('fill', d => regionColors[d.name])
        .attr('stroke', '#666')
        .attr('stroke-width', 1);

    // Add white background for text
    regionGroups.append('text')
        .attr('class', 'label-bg')
        .attr('x', 6)
        .attr('y', 4)
        .text(d => d.name)
        .attr('font-size', '10px')
        .attr('stroke', 'white')
        .attr('stroke-width', 3)
        .attr('fill', 'white');

    // Add region labels
    regionGroups.append('text')
        .attr('class', 'label')
        .attr('x', 6)
        .attr('y', 4)
        .text(d => d.name)
        .attr('font-size', '10px')
        .attr('fill', '#333');
}

function showTooltip(event, d) {
    const tooltip = d3.select('#tooltip');
    const avgLatency = calculateAverageLatency(d);
    tooltip.style('opacity', 1)
        .html(`
            <strong>${d.name}</strong><br/>
            ${d.location}<br/>
            Average Latency: ${avgLatency}ms<br/>
        `);
    moveTooltip(event);
}

function moveTooltip(event) {
    d3.select('#tooltip')
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY + 10) + 'px');
}

function hideTooltip() {
    d3.select('#tooltip').style('opacity', 0);
}

function calculateAverageLatency(region) {
    const latencies = Object.values(region.latencies);
    return Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length);
}

function showLatencyLinks(event, region) {
    // Prevent event from bubbling up
    event.stopPropagation();

    // Show tooltip
    showTooltip(event, region);

    // Clear existing links
    linksGroup.selectAll('*').remove();

    // Highlight the corresponding region point
    g.selectAll('.region-point')
        .filter(d => d.name === region.name)
        .attr('r', 6)
        .style('stroke-width', 2);

    // Draw lines to all other regions
    const sourceCoords = projection(region.coordinates);

    Object.entries(region.latencies).forEach(([destName, latency]) => {
        if (destName === region.name) return; // Skip self

        const destRegion = awsRegions.find(r => r.name === destName);
        const destCoords = projection(destRegion.coordinates);

        // Draw straight line instead of curve
        linksGroup.append('path')
            .attr('class', 'latency-link')
            .attr('d', `M${sourceCoords[0]},${sourceCoords[1]}L${destCoords[0]},${destCoords[1]}`)
            .attr('fill', 'none')
            .attr('stroke', latencyColorScale(latency))
            .attr('stroke-width', 2)
            .attr('opacity', 0.5);

        // Calculate midpoint
        const midX = (sourceCoords[0] + destCoords[0]) / 2;
        const midY = (sourceCoords[1] + destCoords[1]) / 2;

        // Add background for label
        linksGroup.append('rect')
            .attr('x', midX - 20)
            .attr('y', midY - 10)
            .attr('width', 40)
            .attr('height', 16)
            .attr('fill', 'white')
            .attr('rx', 3)
            .attr('opacity', 0.8);

        // Add latency label
        linksGroup.append('text')
            .attr('x', midX)
            .attr('y', midY)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('fill', '#333')
            .attr('font-size', '10px')
            .text(`${Math.round(latency)}ms`);
    });

    // Bring source region point to front
    d3.select(event.currentTarget).raise();
}

function hideLatencyLinks() {
    linksGroup.selectAll('*').remove();
    hideTooltip();

    // Reset all region points to original size
    g.selectAll('.region-point')
        .attr('r', 4)
        .style('stroke-width', 1);
}

// Add arrow marker definition to SVG
function addArrowMarker() {
    svg.append('defs').append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 8)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#666');
}

// Handle window resize
function handleResize() {
    width = window.innerWidth;
    height = window.innerHeight;

    // Update SVG dimensions
    svg.attr('width', width)
        .attr('height', height);

    // Update projection with appropriate scale
    const scale = Math.min(width, height) / 6;
    projection
        .scale(scale)
        .center([0, 20]) // Center map slightly north of equator
        .translate([width / 2, height / 2]);

    // Update path generator
    path = d3.geoPath().projection(projection);

    // Redraw map elements
    g.selectAll('path')
        .attr('d', path);

    // Update Voronoi
    drawVoronoi();

    // Update region groups positions
    d3.selectAll('.region-group')
        .attr('transform', d => {
            const coords = projection(d.coordinates);
            return coords ? `translate(${coords[0]},${coords[1]})` : null;
        });

    // Clear any existing latency links
    linksGroup.selectAll('*').remove();
}

// Update the resize listener
window.addEventListener('resize', debounce(handleResize, 50));

// Debounce function to prevent too many resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize the map when the page loads
initMap(); 