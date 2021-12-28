

module.exports = async(req,res,next) => {
    console.log(req.session);
    res.status(200).json(req.session);
}