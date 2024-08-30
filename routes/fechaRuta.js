// routes/fechaRuta.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Has accedido a la ruta de fecha y hora.');
});

module.exports = router;
