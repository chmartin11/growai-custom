const express = require('express');
const app = express();
app.get('/', (req, res) => {
  console.log('Test root route accessed');
  res.send('Test server running');
});
app.listen(3003, () => {
  console.log('Test server running on port 3003');
});