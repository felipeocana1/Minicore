const db = require("../models");
const Pass = db.passes;
// Create and Save a new Pass
exports.create = (req, res) => {
    // Validate request
    if (!req.body.type) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    // Create a Pass
    const pass = new Pass({
        type: req.body.type,
        quota: req.body.quota,
        passes: req.body.passes,
        cost: req.body.cost,
    });
    // Save Pass in the database
    pass
        .save(pass)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Pass."
            });
        });

};
// Retrieve all Passes from the database.
exports.findAll = (req, res) => {
    const type = req.query.type;
    const condition = type ? {type: {$regex: new RegExp(type), $options: "i"}} : {};
    Pass.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving passes."
            });
        });
};
// Find a single Pass with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Pass.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Pass with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Pass with id=" + id });
        });
};
// Update a Pass by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Pass.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Pass with id=${id}. Maybe Pass was not found!`
                });
            } else res.send({ message: "Pass was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pass with id=" + id
            });
        });
};
// Delete a Pass with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Pass.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Pass with id=${id}. Maybe Pass was not found!`
                });
            } else {
                res.send({
                    message: "Pass was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Pass with id=" + id
            });
        });
};
// Delete all Passes from the database.
exports.deleteAll = (req, res) => {
    Pass.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} passes were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all passes."
            });
        });
};