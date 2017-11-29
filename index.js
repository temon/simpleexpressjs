const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({text: 'hello world'}));

app.listen(3000, () => console.log('Server jalan nih'));

