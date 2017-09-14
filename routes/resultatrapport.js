const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('rapport', {title: 'Rapport'});
});

module.exports = router;