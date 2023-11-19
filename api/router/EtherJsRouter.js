const { Router } = require('express');

const express = require('express');
const app = express();
const Web3 = require('web3');
const { sendNft, listUserNft } = require("../controller/EtherJs");


const router = Router();

router.get('/test', async (req, res) => {
    try {
        const response = await listUserNft();
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/sendNft', (req, res) => {
    sendNft(req, res).then(r => {
        res.send(r);
        console.log(r);
    }).catch(error => {
        res.status(500).send(error.message);
    })
});

module.exports = router;


