const cms = require('../module/cms');

const getwebsitedata = async (req, res) => {
    try {
        const _id = req.params.id;
        // console.log(_id);
        const data = await cms.findById(_id);
        // console.log(data.header.img);
        res.status(201).send({
            Status: "Success",
            data
        });
    } catch (err) {
        console.log({
            msg: "errror",
            err
        });
    }

}

module.exports = getwebsitedata;
