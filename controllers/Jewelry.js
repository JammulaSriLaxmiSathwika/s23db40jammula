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
exports.Jewelry_detail =  async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Jewelry.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.Jewelry_update_put =  async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Jewelry.findById( req.params.id)
    // Do updates of properties
    if(req.body.Jewelry_type)
    toUpdate.Jewelry_type = req.body.Jewelry_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };