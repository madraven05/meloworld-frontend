import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout as AuthLayout } from "./pages/auth/layout";
import adminImage from "./assets/admin-login-3d.png";
import orgLogin from "./assets/org-login.png";
import AdminDashboard from "./pages/admin/dashboard";
import waveImg from "./assets/login-wave.png";
import { motion } from "framer-motion";
import SignUp from "./components/forms/signup";
import Login from "./components/forms/login";

function App() {
  return (
    <>
      {/* wave bottom */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
        className="fixed lg:block bottom-0 w-full z-10 lg:-z-10 md:-z-10"
        src={waveImg}
        alt="Background wave"
      />

      <Router>
        <Routes>
          {/* Admin routes */}
          <Route
            path="/admin/login"
            element={
              <AuthLayout imgSrc={adminImage}>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/admin/signup"
            element={
              <AuthLayout imgSrc={adminImage}>
                <SignUp />
              </AuthLayout>
            }
          />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Org routes */}
          <Route
            path="/org/login"
            element={
              <AuthLayout imgSrc={orgLogin}>
                <Login />
              </AuthLayout>
            }
          />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
