const cms = require('../module/cms');

const websitedata = async (req, res) => {
    try {
        const newdata = req.body;
        // console.log(newdata);
        const data = new cms(newdata)
        const datasave = await data.save();
        res.status(201).json(datasave);
    } catch (err) {
        console.log(err);
    }
}

module.exports = websitedata