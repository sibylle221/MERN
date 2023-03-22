import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/patientpages/Notes";
import Requests from "./pages/patientpages/Requests";
import Medications from "./pages/patientpages/Medications";
import Prescribe from "./pages/staffpages/Prescribe";
import PastRequests from "./pages/patientpages/PastRequests";
import NewRequest from "./pages/patientpages/NewRequest";
import RequestsStaff from "./pages/staffpages/RequestsStaff";
import StaffHome from "./pages/staffpages/StaffHome";
import AllRequests from "./pages/staffpages/AllRequests";
import Home from "./pages/patientpages/Home";
import Index from "./pages/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import "./app.css";

function App() {
  return (
    <>
      <Router>
        <div className="container" id="app">
          <Routes>
            <>
              {/* initial routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* patient routes */}
              <Route path="/pastrequests" element={<PastRequests />} />
              <Route path="/medications" element={<Medications />} />
              <Route path="/newrequest" element={<NewRequest />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/index" element={<Index />} />
              <Route path="/requests" element={<Requests />} />
              {/* staff routes */}
              <Route path="/staffhome" element={<StaffHome />} />
              <Route path="/requestsStaff" element={<RequestsStaff />} />
              <Route path="/allrequests" element={<AllRequests />} />
              <Route path="/prescribe" element={<Prescribe />} />
            </>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(App);
