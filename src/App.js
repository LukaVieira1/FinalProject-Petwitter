import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import { ChangeContextProvider } from "./context/petweetChange-context";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";

function App() {
  return (
    <AuthProvider>
      <ChangeContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Navbar />
              </RequireAuth>
            }
          >
            {" "}
            <Route index path="/home" element={<Home />} />{" "}
          </Route>
        </Routes>
      </ChangeContextProvider>
    </AuthProvider>
  );
}

export default App;
