// import todo
const todo = require("../models/Todo");

// define route handler
exports.createTodo = async (req, res) => {
    try {
        // extract title and description from request body
        const { title, description } = req.body;

        // create a new todo obj and insert in DB
        const response = await todo.create({ title, description });

        // send a json response with success flag
        res.status(200).json({
            success: true,
            message: "Todo created successfully",
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "server error",
            message: error.message,
        });
    }
};
