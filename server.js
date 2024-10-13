const express = require('express');
const path = require('path');

// Initialize the app
const app = express();

// Define the port (Render.com uses the PORT environment variable)
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Send index.html for any other request (for SPA behavior, optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
