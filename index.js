const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => res.json({text: 'hello world'}));

app.get('/page/:pageNumber', (req,res) => res.send(`Page no ${req.params.pageNumber}`));

app.use(express.static('public'));

app.listen(3000, () => console.log('Server jalan nih'));

