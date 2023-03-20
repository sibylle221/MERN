import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requestService from "./requestService";

const initialState = {
  requests: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create request
export const createRequest = createAsyncThunk(
  "requests/create",
  async (requestData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.createRequest(requestData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get requests
export const getRequests = createAsyncThunk(
  "requests/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.getRequests(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete request
export const deleteRequest = createAsyncThunk(
  "requests/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.deleteRequest(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//update request status
export const updateRequest = createAsyncThunk(
  "requests/update",
  async ({ id, requestStatus }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.updateRequest(id, requestStatus, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// //update request status
// export const updateRequest = createAsyncThunk(
//   "requests/update",
//   console.log("updateRequest"),
//   async ({ id, requestStatus }, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       // console.log(requestData.status);
//       return await requestService.updateRequest(
//         id,
//         requestStatus.status,
//         token
//       );
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    reset: (state) => initialState,
    updateRequestSuccess: (state, action) => {
      const updatedRequest = action.payload;
      const index = state.requests.findIndex(
        (request) => request._id === updatedRequest._id
      );
      if (index !== -1) {
        state.requests[index] = updatedRequest;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRequest.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.requests.push(action.payload);
      })
      .addCase(createRequest.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRequests.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.requests = action.payload;
      })
      .addCase(getRequests.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteRequest.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = " ";
      })
      .addCase(deleteRequest.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.requests = state.requests.filter(
          (request) => request._id !== action.payload._id
        );
      })
      .addCase(deleteRequest.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      // case to update request status
      .addCase(updateRequest.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.requests = state.requests.map((request) =>
          request._id === action.payload._id ? action.payload : request
        );
        // state.requests.put(action.payload);
      })
      .addCase(updateRequest.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = requestSlice.actions;
export default requestSlice.reducer;
