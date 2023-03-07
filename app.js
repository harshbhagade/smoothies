const express = require('express');
const mongoose = require('mongoose');

const app = express();

//middleware 
app.use(express.static('public'));

// view engine 
app.set('view engine', 'ejs');

// routes 
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.listen(3000)