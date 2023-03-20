import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import noteReducer from "../features/notes/noteSlice";
import requestReducer from "../features/requests/requestSlice";
import medicationReducer from "../features/medications/medicationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: noteReducer,
    requests: requestReducer,
    medications: medicationReducer,
  },
});
