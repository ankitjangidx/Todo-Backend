// import todo
const todo = require("../models/Todo");

// define route handler
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
         await todo.findByIdAndDelete(id)

        res.json({
            success: true,
            message: "delete by Id successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "delete by Id failed",
            message: error.message,
        });
    }
};
