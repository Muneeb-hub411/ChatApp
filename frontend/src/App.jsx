import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/SingupPage";
import Login from "./Pages/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
