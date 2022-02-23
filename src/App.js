import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import ModalTweet from "./components/ModalTweet";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Navbar />}>
          <Route element={<ModalTweet />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
