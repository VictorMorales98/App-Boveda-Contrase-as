const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('Registro Exitoso');
});

router.get('/signin', (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', (req, res) => {
    console.log(req.body);
    res.send('Inicio Exitoso');
});

module.exports = router;