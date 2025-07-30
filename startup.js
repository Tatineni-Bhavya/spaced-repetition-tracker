// Startup script for Azure App Service
const path = require('path');

// Set default port for Azure
process.env.PORT = process.env.PORT || 8080;

// Set default environment variables if missing
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Start the actual server
console.log('🚀 Starting Spaced Repetition Tracker...');
console.log('📁 Current directory:', process.cwd());
console.log('🌐 Port:', process.env.PORT);
console.log('🔧 Environment:', process.env.NODE_ENV);

// Load the main server
require('./server/server.js');
