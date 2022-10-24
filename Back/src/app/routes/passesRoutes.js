const passes = require("../controllers/passesController");
module.exports  = (router) => {
    // Create a new Pass
    router.post("/passes", passes.create);
    // Retrieve all passes
    router.get("/passes", passes.findAll);
    // Retrieve a single Pass with id
    router.get("/passes/:id", passes.findOne);
    // Update a Pass with id
    router.put("/passes/:id", passes.update);
    // Delete a Pass with id
    router.delete("/passes/:id", passes.delete);
    // Create a new Pass
    router.delete("/passes", passes.deleteAll);
};