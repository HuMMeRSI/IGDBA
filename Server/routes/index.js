const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	req.send("server is running")
});

module.exports = router;
