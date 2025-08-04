import React from "react";
import Header from "../components/modules/Header";
import Container from "../components/Container";
import HeroSection from "../components/templates/Landing/HeroSection";
import DoctorList from "../components/templates/Landing/DoctorList";
import Footer from "../components/modules/Footer";
import ServiceSummary from "../components/templates/Landing/ServiceSummary";

function Landing() {
  return (
    <Container isGlow>
      <Header />
      <HeroSection/>
      <ServiceSummary/>
      <DoctorList/>
      <Footer/>
    </Container>
  );
}

export default Landing;
