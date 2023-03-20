import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import medicationService from "./medicationService";

const initialState = {
  medications: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create medication
export const createMedication = createAsyncThunk(
  "medications/create",
  async (medicationData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await medicationService.createMedication(medicationData, token);
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

//get medications
export const getMedications = createAsyncThunk(
  "medications/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await medicationService.getMedications(token);
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

// Delete medication
export const deleteMedication = createAsyncThunk(
  "medications/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await medicationService.deleteMedication(id, token);
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

export const medicationSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMedication.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMedication.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.medications.push(action.payload);
      })
      .addCase(createMedication.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getMedications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMedications.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.medications = action.payload;
      })
      .addCase(getMedications.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteMedication.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = " ";
      })
      .addCase(deleteMedication.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.medications = state.medications.filter(
          (medication) => medication._id !== action.payload._id
        );
      })
      .addCase(deleteMedication.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = medicationSlice.actions;
export default medicationSlice.reducer;
