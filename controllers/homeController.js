const router = require('express').Router();
const templateData = require('../models/home');
router.get("/", async(req,res,next) => {
    res.status(200)
    .render('home', {data: templateData});
});

module.exports = router;