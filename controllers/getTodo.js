// import todo
const todo = require("../models/Todo");

// define route handler
exports.getTodo = async (req, res) => {
    try {
        const response = await todo.find({});

        // send a json response with success flag
        res.status(200).json({
            success: true,
            message: "All Todo gets successfully",
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "finding failed",
            message: error.message,
        });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await todo.findById({ _id: id });

        if (!response) {
            res.status(404).json({
                success: false,
                message: `Todo ${id} not found`,
            });
        }
        res.status(200).json({
            success: true,
            message: `Todo ${id} data fetched successfully`,
            data: response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "find by id failed",
            message: error.message,
        });
    }
};
