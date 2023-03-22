import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Requests from "./pages/Requests";
// import Header from "./components/Header";
import Medications from "./pages/Medications";
// import MedicationsS from "./pages/Medications";
import Practice from "./pages/Practice";
import NotesS from "./pages/NotesS";
import Prescribe from "./pages/Prescribe";
import PrescribeS from "./pages/PrescribeS";
import PastRequests from "./pages/PastRequests";
import Test from "./pages/Test";
import NewRequest from "./pages/NewRequest";
import RequestsStaff from "./pages/RequestsStaff";
import AllRequests from "./pages/AllRequests";
import Home from "./pages/Home";
import RequestsStyled from "./pages/RequestsStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import "./app.css";
import { Box } from "@chakra-ui/react";

function App() {
  // document.body.style.backgroundImage = "url('./assets/images/logo.svg')";
  return (
    <>
      <Router>
        <div className="container" id="app">
          {/* <Header /> */}

          <Routes>
            {/* this.props.currentUser.role === 'admin' ? */}
            <>
              <Route path="/requestsStaff" element={<RequestsStaff />} />
              {/* <Route path="/requestsStyled" element={<RequestsStyled />} /> */}
              <Route path="/newrequest" element={<NewRequest />} />
              {/* <Route path="/requestsStyled" element={<RequestsStyled />} /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/prescribeS" element={<PrescribeS />} /> */}
              {/* <Route path="/notesS" element={<NotesS />} /> */}
              <Route path="/requests" element={<Requests />} />
              <Route path="/allrequests" element={<AllRequests />} />
              <Route path="/pastrequests" element={<PastRequests />} />
              <Route path="/medications" element={<Medications />} />
              <Route path="/prescribe" element={<Prescribe />} />
              <Route path="/test" element={<Test />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/medicationsS" element={<MedicationsS />} /> */}
              <Route path="*" element={<Login />} />
            </>
            :
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/newrequest" element={<NewRequest />} />
              {/* <Route path="/requestsStyled" element={<RequestsStyled />} /> */}
              <Route path="/allrequests" element={<AllRequests />} />
              {/* <Route path="/medicationsS" element={<MedicationsS />} /> */}
              <Route path="/notes" element={<Notes />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/pastrequests" element={<PastRequests />} />
              <Route path="/medications" element={<Medications />} />
              <Route path="/prescribe" element={<Prescribe />} />
              <Route path="/test" element={<Test />} />
              <Route path="/home" element={<Home />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="*" element={<Login />} />
            </>
          </Routes>
          {/* </Box> */}
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
