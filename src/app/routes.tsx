import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import ClinicExplorer from "./pages/ClinicExplorer";
import TokenGeneration from "./pages/TokenGeneration";
import PatientStatus from "./pages/PatientStatus";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/clinics",
    Component: ClinicExplorer,
  },
  {
    path: "/token/:clinicId",
    Component: TokenGeneration,
  },
  {
    path: "/status",
    Component: PatientStatus,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
  {
    path: "/admin/queue",
    Component: AdminDashboard,
  },
  {
    path: "/admin/patients",
    Component: AdminDashboard,
  },
  {
    path: "/admin/billing",
    Component: AdminDashboard,
  },
  {
    path: "/admin/reports",
    Component: AdminDashboard,
  },
  {
    path: "/admin/settings",
    Component: AdminDashboard,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
