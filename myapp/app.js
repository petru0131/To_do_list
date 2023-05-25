const express = require('express');
//const bodyParser = require('body-parser');
//const fs = require('fs');
const path = require('path');
const app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'appp.js')));
//let todo = [];

// Definirea rutelor
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'todo.html'));
});

app.get('/to-do', (req, res) => {
  res.sendFile(path.join(__dirname, 'todolist.html'));
});

app.get('/done', (req, res) => {
  res.sendFile(path.join(__dirname, 'done.html'));
});



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


