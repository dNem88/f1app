

module.exports = async(req,res,next) => {
    const data = req.query;
    res.status(200).json(data);
}