const mongoose = require("mongoose");

const medicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    email: {
      type: String,
      ref: "email",
      required: true,
    },

    // patient: {
    //   type: String,
    //   required: [true, "Please add a patient"],
    // },

    drug: {
      type: String,
      required: [true, "Please add a prescription"],
    },

    dosage: {
      type: String,
      required: [true, "Please add a dosage"],
    },

    doctor: {
      type: String,
      required: [true, "Please add a doctor"],
    },

    instructions: {
      type: String,
      //   required: [true, "Please add a instructions"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Medication", medicationSchema);
