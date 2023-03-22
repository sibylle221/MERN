const asyncHandler = require("express-async-handler");

const Request = require("../models/requestModel");
const User = require("../models/userModel");

// @desc Get requests
// @route GET /api/requests
// @access Private

const getRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({ user: req.user.id });
  res.status(200).json(requests);
});

// @desc Set request
// @route  POST /api/requests
// @access Private

const setRequest = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a request");
  }
  if (!req.body.status) {
    res.status(400);
    throw new Error("Please add a request status");
  }
  const request = await Request.create({
    text: req.body.text,
    user: req.user.id,
    status: req.body.status,
  });
  res.status(200).json(request);
});

// @desc Cancel request
// @route PUT /api/requests/:id
// @access Private

const cancelRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);
  if (!request) {
    res.status(404);
    throw new Error("Request not found");
  }

  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }
  // make sure request is owned by user
  if (request.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to update request");
  }
  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      req.body,

      {
        new: true,
      }
    );

    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: "Failed to update request" });
  }
});

// @desc Complete request
// @route PUT /api/requests/:id
// @access Private

const completeRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);
  if (!request) {
    res.status(404);
    throw new Error("Request not found");
  }

  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }
  // make sure request is owned by user
  if (request.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to update request");
  }
  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      req.body,

      {
        new: true,
      }
    );

    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: "Failed to update request" });
  }
});

// @desc reactivate request
// @route PUT /api/requests/:id
// @access Private

const activateRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);
  if (!request) {
    res.status(404);
    throw new Error("Request not found");
  }

  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }
  // make sure request is owned by user
  if (request.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to update request");
  }
  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      req.body,

      {
        new: true,
      }
    );

    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: "Failed to update request" });
  }
});

// @desc Pending request
// @route PUT /api/requests/:id
// @access Private

const pendingRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);
  if (!request) {
    res.status(404);
    throw new Error("Request not found");
  }

  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }
  // make sure request is owned by user
  if (request.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to update request");
  }
  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      req.body,

      {
        new: true,
      }
    );

    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(500).json({ message: "Failed to update request" });
  }
});

// @desc Delete request
// @route DELETE /api/requests
// @access Private

const deleteRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (!request) {
    res.status(400);
    throw new Error("Request not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //if state not found

  // make sure request is owned by user
  if (request.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to delete request");
  }

  await request.deleteOne();

  res.status(200).json({ id: req.params.id });
});

//function to get all requests from all users for admin

// @desc get all request
// @route GET /api/requests
// @access Private

const getAllRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({});
  console.log("HEEERREEE", requests);
  res.status(200).json(requests);
});

module.exports = {
  getRequests,
  setRequest,
  cancelRequest,
  completeRequest,
  deleteRequest,
  pendingRequest,
  activateRequest,
  getAllRequests,
};
