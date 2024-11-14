# AWS Latency Map

An interactive visualization of AWS region latencies using D3.js and Voronoi diagrams.

## Features

- Interactive world map showing all AWS regions
- Color-coded Voronoi regions for easy visualization of closest regions
- Click on regions to see latency connections to all other regions
- Two Voronoi visualization modes: (hidden on UI but available in code)
  - Euclidean distance-based (fast)
  - Latency-based approximation (slower but more accurate)
- Responsive design that works on all screen sizes
- Hover effects and tooltips for better interactivity

## Demo

Visit the live demo at: [AWS Latency Map](https://github.com/mustafaakin/aws-latency-voronoi)

## Data Source

Latency data is sourced from [CloudPing.co](https://www.cloudping.co/)

## Local Development

1. Clone the repository
