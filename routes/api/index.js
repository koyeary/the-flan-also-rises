const router = require('express').Router();
const bookRoutes = require('./books');

// Book routes
router.use('/books', bookRoutes);

router.use(function(req,res) {
    res.sendFile(path.join(_dirname, '../../client/build/index.html'));
})

module.exports = router;
