const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/principal', (req, res) => {
    res.render('links/principal');
});

router.post('/principal', (req, res) => {
    res.send('Recibido');
});

module.exports = router;