import axios from "axios";

const API_URL = "/api/medications/";

// Create medication
const createMedication = async (medicationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, medicationData, config);
  console.log(response);
  return response.data;
};

// Get medications
const getMedications = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// Delete medication
const deleteMedication = async (medicationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + medicationId, config);
  return response.data;
};

const medicationService = {
  createMedication,
  getMedications,
  deleteMedication,
};

export default medicationService;
