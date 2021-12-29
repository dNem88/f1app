const router = require('express').Router();

router.get("/", async(req,res,next) => {
    res.status(200)
    .render('home', {name: "dani", age: 33});
});

module.exports = router;