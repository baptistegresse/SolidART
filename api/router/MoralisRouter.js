const { Router } = require('express');
const {getNftFromWallet, listNftOwnerFromContract, listAllNftFromContract} = require("../controller/MoralisController");

const router = Router();

router.post('/list', (req, res) => {
  console.log('passer dans le /list');
  getNftFromWallet(req, res).then(r => {
    res.send(r);
    console.log(r);
  }).catch(error => {
    res.status(500).send(error.message);
  });
});

router.get('/listOwner', (req, res) => {
  listNftOwnerFromContract(req, res).then(r => {
    res.send(r);
    console.log(r);
  }).catch(error => {
    res.status(500).send(error.message);
  });
})

router.get('/allNft', (req, res) => {
  listAllNftFromContract(req, res).then(r => {
    res.send(r);
    console.log(r);
  }).catch(error => {
    res.status(500).send(error.message);
  })
})

module.exports = router;