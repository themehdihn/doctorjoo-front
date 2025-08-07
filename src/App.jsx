import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import DoctorDetails from "./pages/DoctorDetails";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NotAccess from "./pages/NotAccess";

function App() {
  return (
    <Routes>
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/not-access" element={<NotAccess/>}/>
    </Routes>
  );
}

export default App;
