const express = require('express');
const app = express();

// https://   www.example.com   /v1/books/    id1         ?name=computer
// protocol   domain            path      route params    query params

// method -- path -- route handler
app.get('/', (req, res) => {
  res.send('hello from node.js');
});

app.post('/hello', (req, res) => {
  res.send('hello from post');
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

// npm init -y
// npm i xxxxx
// npm i -D xxxx
// npm run xxx
// express

// const a = function(){}
// a.x = 1;

// a();
// a.x -> 1
