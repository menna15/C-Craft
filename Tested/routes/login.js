const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login', {
        title: 'Log In',
        css: 'login'
    })
});

module.exports = router;
