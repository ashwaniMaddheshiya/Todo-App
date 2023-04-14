const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo-controllers");

router.get("/", todoController.getItems);
router.post("/", todoController.addItem);
router.patch("/updateOrder", todoController.updateOrder);
router.delete("/:tid", todoController.deleteItem);

module.exports = router;
