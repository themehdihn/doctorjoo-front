import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./pages/Landing";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import DoctorDetails from "./pages/DoctorDetails";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NotAccess from "./pages/NotAccess";
import AppContextProvider from "./context/AppContext";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./components/modules/ProtectRoute";
import Mehdi from "./components/modules/Mehdi";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Appointments from "./pages/Appointments";
import DoctorsPanel from "./pages/DoctorsPanel";
import Users from "./pages/Users";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Toaster />
        <Routes>
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/doctors/:docId" element={<DoctorDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* start user dashboard */}
          <Route
            path="/user"
            element={<ProtectRoute>{/* <OwnerLayout /> */}</ProtectRoute>}
          >
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          {/* end user dashboard */}

          {/* doctor role */}
          <Route
            path="/doctor-panel"
            element={<ProtectRoute>{/* <FreelancerLayout /> */}</ProtectRoute>}
          >
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          {/* end Doctor Role */}

          {/* admin routes start */}
          <Route
            path="/admin"
            element={
              <ProtectRoute>
                <AdminLayout />
              </ProtectRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="doctors" element={<DoctorsPanel />} />
            <Route path="users" element={<Users />} />
            {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
          </Route>
          {/* admin routes end */}

          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/not-access" element={<NotAccess />} />
        </Routes>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
