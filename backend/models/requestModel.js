const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    text: {
      type: String,
      required: [true, "Please add a request"],
    },

    status: {
      type: String,
      default: "active",
      enum: ["active", "completed", "cancelled"],
      required: [true, "Please add a request status"],
    },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
