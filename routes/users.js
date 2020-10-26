var express = require('express');
var router = express.Router();

router.use('/', function (req, res, next) {
	console.log('Execution Time: ', Date.now())
	next()
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users home page');
});

router.get('/:id', function (req, res, next) {
	res.send(`Retrieving User Id: ${req.params.id}`)
})

module.exports = router;
