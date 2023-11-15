var express = require('express');
const Jewelry_controlers= require('../controllers/Jewelry');
var router = express.Router();
/* GET Jewelry */
router.get('/', Jewelry_controlers.Jewelry_view_all_Page );
/* GET detail Jewelry page */
router.get('/detail', Jewelry_controlers.Jewelry_view_one_Page);
/* GET create Jewelry page */
router.get('/create', Jewelry_controlers.Jewelry_create_Page);
/* GET create update page */
router.get('/update', Jewelry_controlers.Jewelry_update_Page);
/* GET delete Jewelry page */
router.get('/delete', Jewelry_controlers.Jewelry_delete_Page);
module.exports = router;
