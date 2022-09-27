const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.text());

app.use((req, res, next) => {
    console.log(`[${req.method} - ${req.headers.host}${req.originalUrl}]`);
    next();
})

//Routes
const mygroupReq = require('./routes/MyGroupRoute');
app.use('/', mygroupReq);
const mssvReq = require('./routes/19110051Route');
app.use('/19110051', mssvReq);
const messageReq = require('./routes/MessageRoute');
app.use('/message', messageReq);

app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message,
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})