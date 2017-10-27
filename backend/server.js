import express from 'express';
import fs from 'fs';

const app = express();

app.get('/api/games', (req, res) => {
    // var authors = fs.readFileSync('./data/authors.json');
    var json = JSON.parse(require('fs').readFileSync('./data/authors.json', 'utf8'));
    res.json(json);
    
})

app.listen(8080, () => console.log('Server is running up on localhost:8080'));