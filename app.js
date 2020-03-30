const express = require('express');
const app = express();

// MIDDLEWARES: execute when certain routes are hit;
// app.use('/posts', () => {
//   console.log("This is middleware running");
// });

// ROUTES
// This sends us back some stuff;
app.get(`/`, (req, res) => {
  res.send('We are on home.');
});

app.get(`/posts`, (req, res) => {
  res.send('We are on POSTS.');
});





app.listen(3000);