const httpError = require("../models/http-Error");
const Todos = require("../models/todos");

const getItems = async (req, res, next) => {
  let todos;
  try {
    todos = await Todos.find();
    console.log(todos);
  } catch (err) {
    const error = new httpError(
      "Could not fetch the list of items, Please try again",
      500
    );
    return next(error);
  }
  res.json({ todos });
};

const addItem = async (req, res, next) => {
  console.log(req.body);
  const { item } = req.body;

  let todos = new Todos({
    item,
  });

  try {
    await todos.save();
  } catch (err) {
    const error = new httpError(
      "Could not save the task, Please try again",
      500
    );
    return next(error);
  }
  res.status(201).json({ message: "Successful Created" });
};

const updateOrder = async (req, res, next) => {
  const newOrder = req.body.todos;

  try {
    let todos = await Todos.find();
    for (let i = 0; i < newOrder.length; i++) {
      todos[i].item = newOrder[i].item;
      await todos[i].save();
    }
  } catch (err) {
    const error = new httpError(
      "Could not update the data, Please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({ message: "Order updated successfully." });
};

const deleteItem = async (req, res, next) => {
  const todoId = req.params.tid;
  let taskToDelete;
  try {
    taskToDelete = await Todos.findByIdAndDelete({ _id: todoId });
  } catch (err) {
    const error = new httpError(
      "Could not delete the task, Please try again",
      500
    );
    return next(error);
  }
  res.status(200).json({ message: "Task removed successfully" });
};

exports.getItems = getItems;
exports.addItem = addItem;
exports.updateOrder = updateOrder;
exports.deleteItem = deleteItem;
