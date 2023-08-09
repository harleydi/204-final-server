var express = require('express');
var router = express.Router();
const { register, loginUser, verifyUser } = require('../controllers/usersController');
const { validateUserData } = require('../utils/validateUserData');
const { checkIsEmpty } = require('../utils/checkIsEmpty');
const { jwtMiddleware } = require('../utils/jwtMiddleware');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/register", checkIsEmpty, validateUserData, register)
router.post("/login", checkIsEmpty, validateUserData, loginUser)
router.get('/validate', jwtMiddleware, verifyUser)

module.exports = router;
