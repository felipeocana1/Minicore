const users = require("../controllers/userController");
module.exports  = (router) => {
    // Create a new User
    router.post("/users", users.create);
    // Retrieve all users
    router.get("/users", users.findAll);
    // Retrieve a single User with id
    router.get("/users/:id", users.findOne);
    // Update a User with id
    router.put("/users/:id", users.update);
    // Delete a User with id
    router.delete("/users/:id", users.delete);
    // Create a new User
    router.delete("/users", users.deleteAll);
};