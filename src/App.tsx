import "./App.css";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout as AuthLayout } from "./pages/auth/layout";
import adminImage from "./assets/admin-login-3d.png";
import orgLogin from "./assets/org-login.png";
import AdminDashboard from "./pages/admin/admin-dashboard";
import { motion } from "framer-motion";
import SignUp from "./components/forms/signup";
import Login from "./components/forms/login";
import PrivateRoute from "./components/private-route";
import AdminHome from "./pages/admin/panels/home/admin-home";
import AssessmentsPanel from "./pages/admin/panels/assessments/assessments-panel";

function App() {
  return (
    <>
      {/* wave bottom */}
      {/* <motion.img
        initial={{ opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
        className="fixed lg:block bottom-0 w-full z-10 lg:-z-10 md:-z-10"
        src={waveImg}
        alt="Background wave"
      /> */}

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
          <Route element={<PrivateRoute path="/admin/login" />}>
            <Route path="/admin/dashboard/*" element={<AdminDashboard />}>
              <Route index element={<Navigate to="home" replace />} />
              <Route index path="home" element={<AdminHome />} />
              <Route path="assessments/*" element={<AssessmentsPanel />} />
            </Route>
          </Route>

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
