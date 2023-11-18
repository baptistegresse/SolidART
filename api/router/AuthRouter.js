const { Router } = require('express');
const {login, getUser} = require("../controller/UserController");

const router = Router();

router.post('/login', login);

router.get('/:id', getUser);

module.exports = router;