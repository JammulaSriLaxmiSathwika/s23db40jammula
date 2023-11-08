var Jewelry = require('../models/Jewelry');
// List of all Jewelry
exports.Jewelry_list =  async function(req, res) {
    try{
    theCostumes = await Jewelry.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// VIEWS
// Handle a show all view
exports.Jewelry_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Jewelry.find();
    res.render('Jewelry', { title: 'Jewelry Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Jewelry.
exports.Jewelry_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry detail: ' + req.params.id);
};
// Handle Jewelry create on POST.
exports.Jewelry_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Jewelry();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.type = req.body.type;
    document.material = req.body.material;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle Jewelry delete form on DELETE.
exports.Jewelry_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry delete DELETE ' + req.params.id);
};
// Handle Jewelry update form on PUT.
exports.Jewelry_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Jewelry update PUT' + req.params.id);
};