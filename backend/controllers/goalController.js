const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc Set goal
// @route  POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({ message: "Please add a goal" });
    // throw new Error("Please add a goal");
  }
  res.status(200).json({ message: "Set Goals" });
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
