

module.exports = async(req,res,next) => {
    res.status(200).render('home', {name: "dani", age: 33});
}