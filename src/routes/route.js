const router = require('express').Router();
const websitedata = require('./../controller/websitedatapost');
const getwebsitedata = require('./../controller/getwebsitedata');
const img = require('./../controller/img');
const update = require('../controller/update');

router.post('/data', websitedata);
router.patch('/up/:id',update);
router.get('/get/:id',getwebsitedata);

router.post('/img', img.single('profile'), (req, res) => {
    console.log(req.file.filename);
    console.log(__dirname, "hiii");
    res.json({
        success: 1, 
        profile_url: req.file.filename
    })
})


module.exports = router;