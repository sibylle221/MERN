import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from "./noteService";

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create note
export const createNote = createAsyncThunk(
  "notes/create",
  async (noteData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.createNote(noteData, token);
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

//get notes
export const getNotes = createAsyncThunk("notes/get", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await noteService.getNotes(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete note
export const deleteNote = createAsyncThunk(
  "notes/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.deleteNote(id, token);
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

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.notes.push(action.payload);
      })
      .addCase(createNote.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteNote.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
        state.message = " ";
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.notes = state.notes.filter(
          (note) => note._id !== action.payload._id
        );
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = noteSlice.actions;
export default noteSlice.reducer;
