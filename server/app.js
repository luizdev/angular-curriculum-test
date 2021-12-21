var express = require('express');

var app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        message: 'Peticion Realizada Correctamente'
    });
});

app.listen(3001, () => {
    console.log('Express server port 3001 \x1b[32m%s\x1b[0m', 'online');
});