// import todo
const todo = require("../models/Todo");

// define route handler
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const response = await todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      },
      { new: true } // to return the updated document
    );

    res.status(200).json({
      success: true,
      message: "update by Id successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "update by Id failed",
      message: error.message,
    });
  }
};
