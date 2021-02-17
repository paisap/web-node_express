const express = require('express');
const app = express();
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/web/html/login.html'));
})

app.listen(port, () => {
  console.log('TA VIVO');
})

