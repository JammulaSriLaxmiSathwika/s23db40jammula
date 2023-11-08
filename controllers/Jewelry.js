var Jewelry = require('../models/Jewelry');
// List of all Jewelry
exports.Jewelry_list = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry list');
};
// for a specific Jewelry.
exports.Jewelry_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Jewelry_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry create POST');
};
// Handle Costume delete form on DELETE.
exports.Jewelry_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry delete DELETE ' + req.params.id);
};
// Handle Jewelry update form on PUT.
exports.Jewelry_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry update PUT' + req.params.id);
};
