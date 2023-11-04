const Model = require('../models/model');

async function getModels(req, res) {
    if(req.method !== "GET"){
        res.status(405).send(`Method ${req.method} is not allowed, expecting GET`);
    }

    const result = await Model.find().sort({_id: "asc"});
    res.send(result);
}

async function getModel(req, res) {

    if(req.method !== "GET"){
        res.status(405).send(`Method ${req.method} is not allowed, expecting GET`);
    }

    if (!req.params.field) {
        res.status(400).send("Model's id input is required");
    }

    const result = await Model.findOne({_id: req.params.id});
    res.send(result);
}

async function getModelsByField(req, res) {

    if(req.method !== "GET"){
        res.status(405).send(`Method ${req.method} is not allowed, expecting GET`);
    }

    if (!req.params.field) {
        res.status(400).send("Field input is required");
    }

    const result = await Model.find({field: req.params.field});
    res.send(result);
}

async function postModel(req, res) {

    if(req.method !== "POST"){
        res.status(405).send(`Method ${req.method} is not allowed, expecting POST`);
    }

    if (!req.body.field) {
        res.status(400).send("Field input is required");
    }

    const model = new Model({
        field: req.body.field,
    });

    const result = await model.save();
    res.send(result);
}

async function putModel(req, res) {

    if(req.method !== "PUT"){
        res.status(405).send(`Method ${req.method} is not allowed, expecting PUT`);
    }

    const result = await Model.findOneAndUpdate({_id: req.params.id}, {field: req.body.field});
    res.send(result);
}

async function deleteModel(req, res) {

    if(req.method !== "DELETE"){
        res.status(405).send(`Method ${req.method} is not allowed, expecting DELETE`);
    }

    const result = await Model.findOneAndDelete({_id: req.params.id});
    res.send(result);
}

module.exports = {
    getModels, getModel, getModelsByField,
    postModel, putModel, deleteModel
}