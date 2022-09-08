const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.end('oke')
})


module.exports = router;
