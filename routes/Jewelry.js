var express = require('express');
const Jewelry_controlers= require('../controllers/Jewelry');
var router = express.Router();
/* GET Jewelry */
router.get('/', Jewelry_controlers.Jewelry_view_all_Page );
/* GET detail Jewelry page */
router.get('/detail', Jewelry_controlers.Jewelry_view_one_Page);
module.exports = router;
