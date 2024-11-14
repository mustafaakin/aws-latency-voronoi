// AWS regions data with coordinates and actual latency data
const awsRegions = [
    {
        name: 'af-south-1',
        location: 'Africa (Cape Town)',
        coordinates: [18.4241, -33.9249],
        latencies: {
            'af-south-1': 11.98,
            'ap-east-1': 343.19,
            'ap-northeast-1': 368.42,
            'ap-northeast-2': 395.17,
            'ap-northeast-3': 377.3,
            'ap-south-1': 255.05,
            'ap-southeast-1': 311.22,
            'ap-southeast-2': 422.39,
            'ca-central-1': 226.66,
            'eu-central-1': 157.53,
            'eu-north-1': 176.07,
            'eu-south-1': 170.13,
            'eu-west-1': 163.28,
            'eu-west-2': 153.67,
            'eu-west-3': 146.95,
            'me-south-1': 241.99,
            'sa-east-1': 341.96,
            'us-east-1': 228.39,
            'us-east-2': 238.87,
            'us-west-1': 288.6,
            'us-west-2': 284.53
        }
    },
    {
        name: 'ap-east-1',
        location: 'Asia Pacific (Hong Kong)',
        coordinates: [114.1095, 22.3964],
        latencies: {
            'af-south-1': 346.92,
            'ap-east-1': 4.52,
            'ap-northeast-1': 56.18,
            'ap-northeast-2': 40.63,
            'ap-northeast-3': 51.77,
            'ap-south-1': 100.74,
            'ap-southeast-1': 39.51,
            'ap-southeast-2': 129.28,
            'ca-central-1': 196.17,
            'eu-central-1': 199.71,
            'eu-north-1': 217.66,
            'eu-south-1': 188.35,
            'eu-west-1': 224.44,
            'eu-west-2': 210.21,
            'eu-west-3': 204.75,
            'me-south-1': 132.43,
            'sa-east-1': 310.22,
            'us-east-1': 198.57,
            'us-east-2': 185.55,
            'us-west-1': 158.53,
            'us-west-2': 148.19
        }
    },
    {
        name: 'ap-northeast-1',
        location: 'Asia Pacific (Tokyo)',
        coordinates: [139.6917, 35.6895],
        latencies: {
            'af-south-1': 372.74,
            'ap-east-1': 55.73,
            'ap-northeast-1': 6.34,
            'ap-northeast-2': 38.2,
            'ap-northeast-3': 11.96,
            'ap-south-1': 134.92,
            'ap-southeast-1': 71.53,
            'ap-southeast-2': 113.38,
            'ca-central-1': 147.47,
            'eu-central-1': 231.02,
            'eu-north-1': 250.46,
            'eu-south-1': 221.43,
            'eu-west-1': 210.04,
            'eu-west-2': 217.59,
            'eu-west-3': 225.39,
            'me-south-1': 175.11,
            'sa-east-1': 260.54,
            'us-east-1': 158.47,
            'us-east-2': 137.26,
            'us-west-1': 109.25,
            'us-west-2': 99.93
        }
    },
    {
        name: 'ap-northeast-2',
        location: 'Asia Pacific (Seoul)',
        coordinates: [126.9780, 37.5665],
        latencies: {
            'af-south-1': 398.08,
            'ap-east-1': 42.6,
            'ap-northeast-1': 38.92,
            'ap-northeast-2': 5.65,
            'ap-northeast-3': 29.35,
            'ap-south-1': 138.11,
            'ap-southeast-1': 75.97,
            'ap-southeast-2': 146.96,
            'ca-central-1': 174.1,
            'eu-central-1': 234.29,
            'eu-north-1': 252.79,
            'eu-south-1': 223.63,
            'eu-west-1': 241.24,
            'eu-west-2': 247.1,
            'eu-west-3': 256.06,
            'me-south-1': 169.09,
            'sa-east-1': 289.37,
            'us-east-1': 186.91,
            'us-east-2': 166.11,
            'us-west-1': 137.95,
            'us-west-2': 127.84
        }
    },
    {
        name: 'ap-northeast-3',
        location: 'Asia Pacific (Osaka)',
        coordinates: [135.5023, 34.6937],
        latencies: {
            'af-south-1': 383.03,
            'ap-east-1': 50.03,
            'ap-northeast-1': 11.53,
            'ap-northeast-2': 27.32,
            'ap-northeast-3': 4.77,
            'ap-south-1': 142.22,
            'ap-southeast-1': 79.8,
            'ap-southeast-2': 122.99,
            'ca-central-1': 152.14,
            'eu-central-1': 236.02,
            'eu-north-1': 255.09,
            'eu-south-1': 227.83,
            'eu-west-1': 212.91,
            'eu-west-2': 221.61,
            'eu-west-3': 230.16,
            'me-south-1': 171.75,
            'sa-east-1': 264.49,
            'us-east-1': 153.56,
            'us-east-2': 141.66,
            'us-west-1': 111.2,
            'us-west-2': 100.78
        }
    },
    {
        name: 'ap-south-1',
        location: 'Asia Pacific (Mumbai)',
        coordinates: [72.8777, 19.0760],
        latencies: {
            'af-south-1': 262.79,
            'ap-east-1': 101.23,
            'ap-northeast-1': 135.24,
            'ap-northeast-2': 138.74,
            'ap-northeast-3': 142.0,
            'ap-south-1': 6.15,
            'ap-southeast-1': 66.17,
            'ap-southeast-2': 156.73,
            'ca-central-1': 194.06,
            'eu-central-1': 134.12,
            'eu-north-1': 152.92,
            'eu-south-1': 126.53,
            'eu-west-1': 129.16,
            'eu-west-2': 120.16,
            'eu-west-3': 111.93,
            'me-south-1': 40.66,
            'sa-east-1': 305.39,
            'us-east-1': 196.19,
            'us-east-2': 202.19,
            'us-west-1': 233.28,
            'us-west-2': 222.28
        }
    },
    {
        name: 'ap-southeast-1',
        location: 'Asia Pacific (Singapore)',
        coordinates: [103.8198, 1.3521],
        latencies: {
            'af-south-1': 311.08,
            'ap-east-1': 39.16,
            'ap-northeast-1': 71.82,
            'ap-northeast-2': 75.45,
            'ap-northeast-3': 78.01,
            'ap-south-1': 66.59,
            'ap-southeast-1': 7.04,
            'ap-southeast-2': 96.73,
            'ca-central-1': 215.37,
            'eu-central-1': 162.94,
            'eu-north-1': 183.73,
            'eu-south-1': 155.09,
            'eu-west-1': 182.95,
            'eu-west-2': 176.53,
            'eu-west-3': 169.12,
            'me-south-1': 100.56,
            'sa-east-1': 328.82,
            'us-east-1': 233.16,
            'us-east-2': 205.15,
            'us-west-1': 172.4,
            'us-west-2': 160.21
        }
    },
    {
        name: 'ap-southeast-2',
        location: 'Asia Pacific (Sydney)',
        coordinates: [151.2093, -33.8688],
        latencies: {
            'af-south-1': 426.86,
            'ap-east-1': 131.69,
            'ap-northeast-1': 116.6,
            'ap-northeast-2': 149.47,
            'ap-northeast-3': 124.24,
            'ap-south-1': 157.98,
            'ap-southeast-1': 97.99,
            'ap-southeast-2': 5.46,
            'ca-central-1': 201.52,
            'eu-central-1': 254.35,
            'eu-north-1': 275.77,
            'eu-south-1': 245.01,
            'eu-west-1': 265.7,
            'eu-west-2': 273.64,
            'eu-west-3': 283.27,
            'me-south-1': 192.26,
            'sa-east-1': 315.12,
            'us-east-1': 201.9,
            'us-east-2': 190.45,
            'us-west-1': 142.49,
            'us-west-2': 144.02
        }
    },
    {
        name: 'ca-central-1',
        location: 'Canada (Central)',
        coordinates: [-73.5673, 45.5017],
        latencies: {
            'af-south-1': 233.16,
            'ap-east-1': 196.38,
            'ap-northeast-1': 147.06,
            'ap-northeast-2': 177.42,
            'ap-northeast-3': 152.89,
            'ap-south-1': 195.96,
            'ap-southeast-1': 219.85,
            'ap-southeast-2': 202.55,
            'ca-central-1': 6.77,
            'eu-central-1': 97.66,
            'eu-north-1': 109.61,
            'eu-south-1': 105.15,
            'eu-west-1': 72.05,
            'eu-west-2': 82.17,
            'eu-west-3': 91.23,
            'me-south-1': 177.81,
            'sa-east-1': 128.97,
            'us-east-1': 20.96,
            'us-east-2': 30.88,
            'us-west-1': 85.55,
            'us-west-2': 63.61
        }
    },
    {
        name: 'eu-central-1',
        location: 'EU (Frankfurt)',
        coordinates: [8.6821, 50.1109],
        latencies: {
            'af-south-1': 160.88,
            'ap-east-1': 196.33,
            'ap-northeast-1': 228.65,
            'ap-northeast-2': 233.88,
            'ap-northeast-3': 236.5,
            'ap-south-1': 132.81,
            'ap-southeast-1': 162.5,
            'ap-southeast-2': 253.9,
            'ca-central-1': 96.82,
            'eu-central-1': 5.99,
            'eu-north-1': 25.37,
            'eu-south-1': 12.82,
            'eu-west-1': 27.95,
            'eu-west-2': 20.26,
            'eu-west-3': 13.37,
            'me-south-1': 95.92,
            'sa-east-1': 207.71,
            'us-east-1': 95.31,
            'us-east-2': 105.02,
            'us-west-1': 155.09,
            'us-west-2': 151.97
        }
    },
    {
        name: 'eu-north-1',
        location: 'EU (Stockholm)',
        coordinates: [18.0686, 59.3293],
        latencies: {
            'af-south-1': 182.58,
            'ap-east-1': 217.84,
            'ap-northeast-1': 249.55,
            'ap-northeast-2': 253.83,
            'ap-northeast-3': 255.51,
            'ap-south-1': 153.21,
            'ap-southeast-1': 183.65,
            'ap-southeast-2': 273.2,
            'ca-central-1': 107.84,
            'eu-central-1': 25.94,
            'eu-north-1': 4.84,
            'eu-south-1': 34.09,
            'eu-west-1': 42.62,
            'eu-west-2': 33.48,
            'eu-west-3': 32.04,
            'me-south-1': 110.47,
            'sa-east-1': 225.31,
            'us-east-1': 115.07,
            'us-east-2': 125.94,
            'us-west-1': 172.93,
            'us-west-2': 170.61
        }
    },
    {
        name: 'eu-south-1',
        location: 'EU (Milan)',
        coordinates: [9.1900, 45.4642],
        latencies: {
            'af-south-1': 172.33,
            'ap-east-1': 186.74,
            'ap-northeast-1': 220.91,
            'ap-northeast-2': 223.44,
            'ap-northeast-3': 227.28,
            'ap-south-1': 126.2,
            'ap-southeast-1': 153.46,
            'ap-southeast-2': 246.19,
            'ca-central-1': 104.91,
            'eu-central-1': 15.49,
            'eu-north-1': 33.35,
            'eu-south-1': 4.58,
            'eu-west-1': 37.65,
            'eu-west-2': 30.08,
            'eu-west-3': 21.89,
            'me-south-1': 115.71,
            'sa-east-1': 217.01,
            'us-east-1': 103.78,
            'us-east-2': 116.32,
            'us-west-1': 163.24,
            'us-west-2': 161.3
        }
    },
    {
        name: 'eu-west-1',
        location: 'EU (Ireland)',
        coordinates: [-6.2603, 53.3498],
        latencies: {
            'af-south-1': 168.0,
            'ap-east-1': 214.01,
            'ap-northeast-1': 209.44,
            'ap-northeast-2': 239.06,
            'ap-northeast-3': 215.9,
            'ap-south-1': 128.63,
            'ap-southeast-1': 179.84,
            'ap-southeast-2': 264.67,
            'ca-central-1': 71.08,
            'eu-central-1': 28.56,
            'eu-north-1': 43.03,
            'eu-south-1': 36.89,
            'eu-west-1': 5.7,
            'eu-west-2': 16.76,
            'eu-west-3': 20.94,
            'me-south-1': 111.95,
            'sa-east-1': 179.85,
            'us-east-1': 72.3,
            'us-east-2': 83.71,
            'us-west-1': 132.17,
            'us-west-2': 127.54
        }
    },
    {
        name: 'eu-west-2',
        location: 'EU (London)',
        coordinates: [-0.1278, 51.5074],
        latencies: {
            'af-south-1': 159.44,
            'ap-east-1': 205.72,
            'ap-northeast-1': 217.3,
            'ap-northeast-2': 247.54,
            'ap-northeast-3': 224.47,
            'ap-south-1': 119.97,
            'ap-southeast-1': 172.83,
            'ap-southeast-2': 273.78,
            'ca-central-1': 80.82,
            'eu-central-1': 20.97,
            'eu-north-1': 33.65,
            'eu-south-1': 30.62,
            'eu-west-1': 14.97,
            'eu-west-2': 7.4,
            'eu-west-3': 13.21,
            'me-south-1': 101.82,
            'sa-east-1': 187.81,
            'us-east-1': 80.59,
            'us-east-2': 90.77,
            'us-west-1': 149.59,
            'us-west-2': 136.34
        }
    },
    {
        name: 'eu-west-3',
        location: 'EU (Paris)',
        coordinates: [2.3522, 48.8566],
        latencies: {
            'af-south-1': 153.13,
            'ap-east-1': 203.34,
            'ap-northeast-1': 224.87,
            'ap-northeast-2': 255.19,
            'ap-northeast-3': 229.35,
            'ap-south-1': 110.66,
            'ap-southeast-1': 169.76,
            'ap-southeast-2': 283.46,
            'ca-central-1': 89.07,
            'eu-central-1': 15.55,
            'eu-north-1': 34.77,
            'eu-south-1': 24.21,
            'eu-west-1': 22.54,
            'eu-west-2': 13.61,
            'eu-west-3': 4.42,
            'me-south-1': 96.09,
            'sa-east-1': 197.77,
            'us-east-1': 84.68,
            'us-east-2': 97.09,
            'us-west-1': 147.28,
            'us-west-2': 144.21
        }
    },
    {
        name: 'me-south-1',
        location: 'Middle East (Bahrain)',
        coordinates: [50.5875, 26.2235],
        latencies: {
            'af-south-1': 247.14,
            'ap-east-1': 132.57,
            'ap-northeast-1': 174.23,
            'ap-northeast-2': 169.65,
            'ap-northeast-3': 173.05,
            'ap-south-1': 41.45,
            'ap-southeast-1': 99.45,
            'ap-southeast-2': 191.47,
            'ca-central-1': 179.03,
            'eu-central-1': 93.44,
            'eu-north-1': 110.89,
            'eu-south-1': 114.95,
            'eu-west-1': 111.8,
            'eu-west-2': 103.19,
            'eu-west-3': 99.56,
            'me-south-1': 4.66,
            'sa-east-1': 294.45,
            'us-east-1': 178.18,
            'us-east-2': 187.81,
            'us-west-1': 237.71,
            'us-west-2': 229.89
        }
    },
    {
        name: 'sa-east-1',
        location: 'SA (São Paulo)',
        coordinates: [-46.6333, -23.5505],
        latencies: {
            'af-south-1': 347.05,
            'ap-east-1': 307.98,
            'ap-northeast-1': 258.71,
            'ap-northeast-2': 289.12,
            'ap-northeast-3': 266.12,
            'ap-south-1': 305.91,
            'ap-southeast-1': 328.69,
            'ap-southeast-2': 314.88,
            'ca-central-1': 128.7,
            'eu-central-1': 207.71,
            'eu-north-1': 226.66,
            'eu-south-1': 215.82,
            'eu-west-1': 179.3,
            'eu-west-2': 188.86,
            'eu-west-3': 197.58,
            'me-south-1': 290.55,
            'sa-east-1': 7.42,
            'us-east-1': 117.11,
            'us-east-2': 128.35,
            'us-west-1': 176.69,
            'us-west-2': 176.58
        }
    },
    {
        name: 'us-east-1',
        location: 'US East (N. Virginia)',
        coordinates: [-77.0469, 38.8048],
        latencies: {
            'af-south-1': 233.05,
            'ap-east-1': 201.12,
            'ap-northeast-1': 156.2,
            'ap-northeast-2': 182.72,
            'ap-northeast-3': 155.77,
            'ap-south-1': 195.72,
            'ap-southeast-1': 232.57,
            'ap-southeast-2': 201.1,
            'ca-central-1': 21.43,
            'eu-central-1': 97.8,
            'eu-north-1': 117.09,
            'eu-south-1': 102.62,
            'eu-west-1': 72.25,
            'eu-west-2': 83.2,
            'eu-west-3': 87.32,
            'me-south-1': 177.17,
            'sa-east-1': 120.55,
            'us-east-1': 7.88,
            'us-east-2': 17.56,
            'us-west-1': 64.85,
            'us-west-2': 65.67
        }
    },
    {
        name: 'us-east-2',
        location: 'US East (Ohio)',
        coordinates: [-82.9988, 39.9612],
        latencies: {
            'af-south-1': 243.22,
            'ap-east-1': 189.27,
            'ap-northeast-1': 140.32,
            'ap-northeast-2': 170.04,
            'ap-northeast-3': 146.35,
            'ap-south-1': 207.31,
            'ap-southeast-1': 207.3,
            'ap-southeast-2': 194.32,
            'ca-central-1': 32.82,
            'eu-central-1': 109.56,
            'eu-north-1': 131.03,
            'eu-south-1': 119.57,
            'eu-west-1': 85.92,
            'eu-west-2': 94.4,
            'eu-west-3': 100.54,
            'me-south-1': 192.63,
            'sa-east-1': 132.02,
            'us-east-1': 19.94,
            'us-east-2': 9.07,
            'us-west-1': 59.47,
            'us-west-2': 58.19
        }
    },
    {
        name: 'us-west-1',
        location: 'US West (N. California)',
        coordinates: [-122.4194, 37.7749],
        latencies: {
            'af-south-1': 293.82,
            'ap-east-1': 156.31,
            'ap-northeast-1': 111.46,
            'ap-northeast-2': 136.37,
            'ap-northeast-3': 110.25,
            'ap-south-1': 231.52,
            'ap-southeast-1': 169.47,
            'ap-southeast-2': 139.61,
            'ca-central-1': 80.32,
            'eu-central-1': 153.89,
            'eu-north-1': 175.18,
            'eu-south-1': 162.82,
            'eu-west-1': 131.63,
            'eu-west-2': 151.13,
            'eu-west-3': 148.83,
            'me-south-1': 236.8,
            'sa-east-1': 177.27,
            'us-east-1': 64.31,
            'us-east-2': 53.56,
            'us-west-1': 5.04,
            'us-west-2': 24.27
        }
    },
    {
        name: 'us-west-2',
        location: 'US West (Oregon)',
        coordinates: [-122.6765, 45.5231],
        latencies: {
            'af-south-1': 286.28,
            'ap-east-1': 146.52,
            'ap-northeast-1': 99.97,
            'ap-northeast-2': 126.11,
            'ap-northeast-3': 101.58,
            'ap-south-1': 221.84,
            'ap-southeast-1': 161.34,
            'ap-southeast-2': 142.54,
            'ca-central-1': 61.79,
            'eu-central-1': 151.89,
            'eu-north-1': 163.96,
            'eu-south-1': 160.89,
            'eu-west-1': 124.48,
            'eu-west-2': 135.05,
            'eu-west-3': 142.72,
            'me-south-1': 230.65,
            'sa-east-1': 176.85,
            'us-east-1': 65.13,
            'us-east-2': 53.31,
            'us-west-1': 23.09,
            'us-west-2': 5.19
        }
    }
]; 