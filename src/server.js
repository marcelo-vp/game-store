const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve('dist')));

app.get('/', (req, res) => {
    res.sendFile('../dist/index.html');
});

app.listen(3000, () => {
    console.log('Game store listening on port 3000!');
});
