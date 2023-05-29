const router = require('express').Router();
const routeCtrl = require('../controllers/route');

router.get('/route', routeCtrl.findDistance);


router.get('/', (req, res) => {
    res.send({ message: 'Route Problem' });
});

module.exports = router;
