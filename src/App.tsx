import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Layout as AuthLayout } from "./pages/auth/layout";
import adminImage from "./assets/admin-login-3d.png";
import orgLogin from "./assets/org-login.png";
import AdminDashboard from "./pages/admin/admin-dashboard";
import SignUp from "./components/forms/signup";
import Login from "./components/forms/login";
import PrivateRoute from "./components/private-route";
import AdminHome from "./pages/admin/panels/home/admin-home";
import AssessmentsPanel from "./pages/admin/panels/assessments/assessments-panel";
import CandidateHome from "./pages/candidate/candidate-home";
import Scales from "./pages/candidate/candidate-chapters";
import AssessmentForm from "./pages/candidate/assessment-form";
import Navbar from "./components/ui/navbar";
import CandidatePage from "./pages/candidate/page";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          {/* Admin routes */}
          <Route
            path="/admin/login"
            element={
              <AuthLayout imgSrc={adminImage}>
                <Login userRole="admin" />
              </AuthLayout>
            }
          />
          <Route
            path="/admin/signup"
            element={
              <AuthLayout imgSrc={adminImage}>
                <SignUp userRole="admin" />
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
                <Login userRole="org" />
              </AuthLayout>
            }
          />
          {/* Candidate routes */}
          <Route
            path="/candidate/login"
            element={
              <AuthLayout imgSrc={adminImage}>
                <Login userRole="candidate" />
              </AuthLayout>
            }
          />
          <Route
            path="/candidate/signup"
            element={
              <AuthLayout imgSrc={adminImage}>
                <SignUp userRole="candidate" />
              </AuthLayout>
            }
          />
          <Route element={<PrivateRoute path="/candidate/login" />}>
            <Route path="/candidate/*" element={<CandidatePage />}>
              <Route index element={<Navigate to="home" replace />} />
              <Route index path="home" element={<CandidateHome />} />
              <Route path="scales/:courseId" element={<Scales />} />
              <Route
                path="assessment/:assessmentId"
                element={<AssessmentForm />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
