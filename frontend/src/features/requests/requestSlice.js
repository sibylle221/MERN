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

// function to get all requests by all users
export const getAllRequests = createAsyncThunk(
  "requests/getAllRequests",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log("hello from slice");

      return await requestService.getAllRequests(token);
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
export const cancelRequest = createAsyncThunk(
  "requests/cancel",
  async ({ id, requestStatus }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.cancelRequest(id, requestStatus, token);
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

export const completeRequest = createAsyncThunk(
  "requests/complete",
  async ({ id, requestStatus }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.completeRequest(id, requestStatus, token);
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

export const activateRequest = createAsyncThunk(
  "requests/activate",
  async ({ id, requestStatus }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.activateRequest(id, requestStatus, token);
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

//pending request status
export const pendingRequest = createAsyncThunk(
  "requests/pending",
  async ({ id, requestStatus }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await requestService.pendingRequest(id, requestStatus, token);
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

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    reset: (state) => initialState,
    cancelRequestSuccess: (state, action) => {
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
      .addCase(getAllRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRequests.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.requests = action.payload;
      })
      .addCase(getAllRequests.rejected, (state, action) => {
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
      .addCase(cancelRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      // case to update request status
      .addCase(cancelRequest.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.requests = state.requests.map((request) =>
          request._id === action.payload._id ? action.payload : request
        );
        // state.requests.put(action.payload);
      })
      .addCase(cancelRequest.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(completeRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(completeRequest.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.requests = state.requests.map((request) =>
          request._id === action.payload._id ? action.payload : request
        );
      })
      .addCase(completeRequest.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(activateRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(activateRequest.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.requests = state.requests.map((request) =>
          request._id === action.payload._id ? action.payload : request
        );
      })
      .addCase(activateRequest.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(pendingRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(pendingRequest.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.requests = state.requests.map((request) =>
          request._id === action.payload._id ? action.payload : request
        );
      })
      .addCase(pendingRequest.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = requestSlice.actions;
export default requestSlice.reducer;
