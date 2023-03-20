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
const updateRequest = async (requestId, status, token) => {
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
// // Update request status
// const updateRequest = async (requestId, requestStatus, token) => {
//   console.log("hello from service");
//   console.log(requestStatus);
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const url = API_URL + requestId;
//   // const response = await axios.put(url, { status }, config);
//   // console.log("words");
//   // return response.data;
//   const { data } = await axios.put(url, { requestStatus }, config);
//   console.log("words");
//   // console.log(status);
//   return data;
// };

const requestService = {
  createRequest,
  getRequests,
  deleteRequest,
  updateRequest,
};

export default requestService;
