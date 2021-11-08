import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Header from "./Share/Header/Header";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Authorization/Login/Login";
import Register from "./Components/Authorization/Register/Register";
import ContextProvider from "./Components/ContextProvider/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
