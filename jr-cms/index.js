const express = require('express');
const app = express();

app.get('/api/students', (res, req) => {
    res.send([]);
})

app.listen(3000, () => {
    console.log('server listening on port 3000');
})