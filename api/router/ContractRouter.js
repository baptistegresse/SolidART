const { Router } = require('express');
const {connect, getInfo} = require("../controller/ContractController");

const router = Router();

router.post('/connect', connect);

router.get('/info', getInfo);

module.exports = {

}