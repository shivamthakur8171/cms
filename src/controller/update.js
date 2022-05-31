const cms = require('../module/cms');

const update = async (req, res) => {
    try {
        const _id = req.params.id;
        // console.log(_id);
        const {favIcon,title, header_img, header_content,
        body_heading1,body_content1,body_heading2,body_content2,body_button1,body_heading3,
        body_heading4,body_heading5,body_heading6,body_heading7,body_heading8,
        body_heading9,body_content5,body_img2,
        footer_leftHeading,footer_leftContent,footer_rightHeading,footer_rightContent} = req.body;
        // console.log(req.body);
        const updateData = await cms.findOneAndUpdate({ _id: _id }, { 
            $set:{favIcon,title, header_img, header_content,
                body_heading1,body_content1,body_heading2,body_content2,body_button1,body_heading3,
                body_heading4,body_heading5,body_heading6,body_heading7,body_heading8,
                body_heading9,body_content5,body_img2,
                footer_leftHeading,footer_leftContent,footer_rightHeading,footer_rightContent}
         });
        // console.log(updateData);
        res.status(201).send({
            msg: "The Data is updated successfully",
            updateData
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = update;
