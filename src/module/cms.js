const mongoose = require('mongoose');

// create schema 

const cmsSchema = new mongoose.Schema({
    favIcon: String,
    title: String,
    header_img: String,
    header_content: String,
    body_heading1: String,
    body_content1: String,
    body_img1: String,
    body_heading2: String,
    body_content2: String,
    body_button1: String,
    body_heading3: String,
    body_heading4: String,
    body_heading5: String,
    body_heading6: String,
    body_heading7: String,
    body_heading8: String,
    body_heading9: String,
    body_content5: String,
    body_img2: String,
    footer_leftHeading: String,
    footer_leftContent: String,
    footer_rightHeading: String,
    footer_rightContent: String
})

// create a model 
const cms = new mongoose.model('website', cmsSchema);

module.exports = cms;