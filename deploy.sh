#!/bin/bash

# Install dependencies
echo "Installing Node.js dependencies..."
npm install

# Install server dependencies if they exist separately
if [ -d "server" ] && [ -f "server/package.json" ]; then
    echo "Installing server dependencies..."
    cd server
    npm install
    cd ..
fi

echo "Deployment completed successfully!"
