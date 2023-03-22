const asyncHandler = require("express-async-handler");

const Medication = require("../models/medicationModel");
const User = require("../models/userModel");

// @desc Get medication
// @route GET /api/medication
// @access Private

const getMedications = asyncHandler(async (req, res) => {
  const medications = await Medication.find({ user: req.user.id });
  res.status(200).json(medications);
});

// @desc Set medication
// @route  POST /api/medications
// @access Private

const setMedication = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a medication");
  }
  const email = req.body.email;
  const user = await User.findOne({ email });
  const medication = await Medication.create({
    email: req.body.email,
    user: user._id,
    drug: req.body.drug,
    dosage: req.body.dosage,
    doctor: req.body.doctor,
    instructions: req.body.instructions,
  });
  console.log(medication, "YIIIIIPPPPPEEEEEE");
  res.status(200).json(medication);
});

// @desc Update medication
// @route PUT /api/medications/:id
// @access Private

const updateMedication = asyncHandler(async (req, res) => {
  const medication = await Medication.findById(req.params.id);
  if (!medication) {
    res.status(400);
    throw new Error("Medication not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  // make sure medication is owned by user
  if (medication.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to update medication");
  }

  const updatedMedication = await Medication.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedMedication);
});

// @desc Delete medication
// @route DELETE /api/medications
// @access Private

const deleteMedication = asyncHandler(async (req, res) => {
  const medication = await Medication.findById(req.params.id);

  if (!medication) {
    res.status(400);
    throw new Error("Medication not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // make sure medication is owned by user
  if (medication.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to delete medication");
  }

  await medication.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMedications,
  setMedication,
  updateMedication,
  deleteMedication,
};
