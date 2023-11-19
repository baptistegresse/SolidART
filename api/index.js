const express = require('express');
const moralisRouter = require('./router/MoralisRouter')
const etherJsRouter = require('./router/EtherJsRouter')
const app = express();
const cors = require('cors');
const {runApp} = require("./controller/MoralisController");
const {listUserNft, sendNft} = require("./controller/EtherJs");

app.use(cors());

app.use(cors({
    origin: '*'
}));

listUserNft();

app.use(express.json());

app.use('/contract', moralisRouter);
app.use('/nft', etherJsRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

runApp();

app.listen(3001, () => {
    console.log('App listen on port', 3001);
})

