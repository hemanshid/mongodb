var usermodel = require('../model/usermodel');

exports.index = async (req,res) => {

    usermodel.create(req.body);

    res.status(200).json({
        status:"sucess"
    })
}