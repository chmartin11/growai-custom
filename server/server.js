console.log('Starting server...');
const express = require('express');
const app = express();

// Middleware
console.log('Adding JSON middleware...');
app.use(express.json());
console.log('JSON middleware added');

// Root route
console.log('Defining root route...');
app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.send('Server is running');
});
console.log('Root route defined');

// Test route
console.log('Defining test route...');
app.get('/test', (req, res) => {
  console.log('Test route accessed');
  res.send('Test route works');
});
console.log('Test route defined');

// Catch-all for unmatched routes
console.log('Defining catch-all handler...');
app.use((req, res) => {
  console.log('Catch-all handler accessed for:', req.path);
  res.status(404).send('Not Found');
});
console.log('Catch-all handler defined');

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});