var express = require('express');
const { register, loginUser } = require('../controllers/usersController');
const { validateUserData } = require('../utils/validateUserData');
const { checkIsEmpty } = require('../utils/checkIsEmpty');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/register", checkIsEmpty, validateUserData, register)
router.post("/login", checkIsEmpty, validateUserData, loginUser)

module.exports = router;
