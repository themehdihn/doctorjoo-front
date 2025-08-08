
import HeroSection from "../components/templates/Landing/HeroSection";
import DoctorList from "../components/templates/Landing/DoctorList";
import Footer from "../components/modules/Footer";
import ServiceSummary from "../components/templates/Landing/ServiceSummary";
import MainLayout from "../components/layouts/MainLayout";
import { useEffect } from "react";

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
