var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Jewelry_controller = require('../controllers/Jewelry');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Jewelry ROUTES ///
// POST request for creating a Jewelry.
router.post('/Jewelry', Jewelry_controller.Jewelry_create_post);
// DELETE request to delete Jewelry.
router.delete('/Jewelry/:id', Jewelry_controller.Jewelry_delete);
// PUT request to update Jewelry.
router.put('/Jewelry/:id', Jewelry_controller.Jewelry_update_put);
// GET request for one Jewelry.
router.get('/Jewelry/:id', Jewelry_controller.Jewelry_detail);
// GET request for list of all Jewelry items.
router.get('/Jewelry', Jewelry_controller.Jewelry_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"Jewelry", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
