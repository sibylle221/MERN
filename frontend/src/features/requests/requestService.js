import axios from "axios";

const API_URL = "/api/requests/";

// Create request
const createRequest = async (requestData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, requestData, config);
  console.log(response);
  return response.data;
};

// Get requests
const getRequests = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// Get all requests from all users for admin
const getAllRequests = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "all", config);
  console.log("HEEERREEE", response.data);
  return response.data;
};

// Delete request
const deleteRequest = async (requestId, token) => {
  console.log("hello from service testing this");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + requestId, config);

  return response.data;
};

// Update request status
const cancelRequest = async (requestId, status, token) => {
  console.log("hello from service");
  // console.log(status); this is undefined for some reason
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = API_URL + requestId;
  // const response = await axios.put(url, { status }, config);
  // console.log("words");
  // return response.data;
  const { data } = await axios.put(url, { status: "cancelled" }, config);
  console.log("words");
  return data;
};

// complete request status
const completeRequest = async (requestId, status, token) => {
  console.log("hello from service");
  // console.log(status); this is undefined for some reason
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = API_URL + requestId;
  // const response = await axios.put(url, { status }, config);
  // console.log("words");
  // return response.data;
  const { data } = await axios.put(url, { status: "completed" }, config);
  console.log("words");
  return data;
};

// Update request status
const activateRequest = async (requestId, status, token) => {
  console.log("hello from service");
  // console.log(status); this is undefined for some reason
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = API_URL + requestId;
  const { data } = await axios.put(url, { status: "active" }, config);
  console.log("words");
  return data;
};

// Update request status
const pendingRequest = async (requestId, status, token) => {
  console.log("hello from service");
  // console.log(status); this is undefined for some reason
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = API_URL + requestId;
  // const response = await axios.put(url, { status }, config);
  // console.log("words");
  // return response.data;
  const { data } = await axios.put(url, { status: "pending" }, config);
  console.log("words");
  return data;
};

const requestService = {
  createRequest,
  getRequests,
  deleteRequest,
  cancelRequest,
  pendingRequest,
  completeRequest,
  activateRequest,
};

export default requestService;
