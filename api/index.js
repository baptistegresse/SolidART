const express = require('express');
const authRouter = require('./router/AuthRouter');
const moralisRouther = require('./router/MoralisRouter')
const app = express();
const cors = require('cors');
const {getTransferDetails, getEvents, test} = require("./solidity");
const {runApp} = require("./controller/MoralisController");

app.use(cors());

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use('/api', authRouter);
app.use('/moralis', moralisRouther);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    test();
});

runApp();

app.listen(3001, () => {
    console.log('App listen on port', 3001);
})

