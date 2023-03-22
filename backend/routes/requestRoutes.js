const express = require("express");
const router = express.Router();
const {
  getRequests,
  getAllRequests,
  setRequest,
  cancelRequest,
  deleteRequest,
  pendingRequest,
  completeRequest,
  activateRequest,
} = require("../controllers/requestController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getRequests).post(protect, setRequest);
router.route("/all").get(protect, getAllRequests);
router
  .route("/:id")
  .put(protect, cancelRequest)
  .put(protect, completeRequest)
  .put(protect, activateRequest)
  .put(protect, pendingRequest)
  .delete(protect, deleteRequest);

module.exports = router;
