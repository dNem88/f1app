

module.exports = async(req,res,next) => {
    console.log(req.session);
    res.status(200).render('home', {name: "dani", age: 33});
}