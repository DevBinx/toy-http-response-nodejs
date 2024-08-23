const req = require("express/lib/request");
const res = require("express/lib/response");

const express = require('express');
const app = express();
const port = 3000;

// 기본 root 경로 라우트
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// /api/greet 경로 라우트
app.get('/api/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});

