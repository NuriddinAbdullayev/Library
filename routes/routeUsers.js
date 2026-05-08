const express = require("express");
const router = express.Router();
const controllerUsers = require("../controllers/controllersUsers");
const {authMiddleware} = require("../middlewares/authMiddleware"); 
const {roleMiddleware} = require("../middlewares/roleMiddleware");

// router.post("/users", controllerUsers.createUser);  

router.post("/register", controllerUsers.registerUser);

router.get("/login", controllerUsers.loginUser);

router.get("/get", controllerUsers.getUsers);

router.delete("/delete", controllerUsers.deleteAll);

// Admin route:
// router.get("/admin", authMiddleware, roleMiddleware("admin"),controllerUsers.adminPanel)

module.exports = router;