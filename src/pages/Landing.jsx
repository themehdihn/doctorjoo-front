
import HeroSection from "../components/templates/Home/HeroSection";
import DoctorList from "../components/templates/Home/DoctorList";
import Footer from "../components/modules/Footer";
import ServiceSummary from "../components/templates/Home/ServiceSummary";

import { useEffect } from "react";
import MainLayout from "../components/modules/MainLayout";

function Landing() {


  return (
    <MainLayout isGlow>
      <HeroSection />
      <ServiceSummary />
      <DoctorList />
    </MainLayout>
  );
}

export default Landing;
