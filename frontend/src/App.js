import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Requests from "./pages/Requests";
import Header from "./components/Header";
import Medications from "./pages/Medications";
import Practice from "./pages/Practice";
import Prescribe from "./pages/Prescribe";
import PastRequests from "./pages/PastRequests";
import Test from "./pages/Test";
import NewRequest from "./pages/NewRequest";
import RequestsStaff from "./pages/RequestsStaff";
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
          {/* <Box
          bgImage="url('./assets/images/background.svg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          height="100vh"
          width="100vw"
        > */}
          <Routes>
            {/* this.props.currentUser.role === 'admin' ? */}
            <>
              <Route path="/requestsStaff" element={<RequestsStaff />} />
              <Route path="/requestsStyled" element={<RequestsStyled />} />
              <Route path="/newrequest" element={<NewRequest />} />
              <Route path="/requestsStyled" element={<RequestsStyled />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/pastrequests" element={<PastRequests />} />
              <Route path="/medications" element={<Medications />} />
              <Route path="/prescribe" element={<Prescribe />} />
              <Route path="/test" element={<Test />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/home" element={<Home />} />
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
