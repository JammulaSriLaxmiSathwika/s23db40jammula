var Jewelry = require('../models/Jewelry');
// List of all Jewelry
exports.Jewelry_list =  async function(req, res) {
    try{
    thejewelrys = await Jewelry.find();
    res.send(thejewelrys);
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
    thejewelrys = await Jewelry.find();
    res.render('Jewelry', { title: 'Jewelry Search Results', results: thejewelrys });
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
    // {"jewelry_type":"goat", "cost":12, "size":"large"}
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
    if(req.body.type)
    toUpdate.type = req.body.type;
    if(req.body.price) toUpdate.price = req.body.price;
    if(req.body.material) toUpdate.material = req.body.material;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    // Handle Jewelry delete on DELETE.
exports.Jewelry_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Jewelry.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.Jewelry_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Jewelry.findById( req.query.id)
    res.render('Jewelrydetail',
    { title: 'Jewelry Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a Jewelry.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Jewelry_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Jewelrycreate', { title: 'Jewelry Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a Jewelry.
// query provides the id
exports.Jewelry_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Jewelry.findById(req.query.id)
    res.render('Jewelryupdate', { title: 'Jewelry Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.Jewelry_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Jewelry.findById(req.query.id)
res.render('Jewelrydelete', { title: 'Jewelry Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};