import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Requests from "./pages/Requests";
import Header from "./components/Header";
import Medications from "./pages/Medications";
import Prescribe from "./pages/Prescribe";
import PastRequests from "./pages/PastRequests";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            this.props.currentUser.role === 'admin' ?
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/pastrequests" element={<PastRequests />} />
              <Route path="/medications" element={<Medications />} />
              <Route path="/prescribe" element={<Prescribe />} />
              <Route path="*" element={<Login />} />
            </>
            :
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/pastrequests" element={<PastRequests />} />
              <Route path="/medications" element={<Medications />} />
              <Route path="*" element={<Login />} />
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
