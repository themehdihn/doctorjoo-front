import React from "react";
import Header from "../templates/Home/HomeHeader";
import Footer from "./Footer";
import Container from "./Container";

function MainLayout({ children, isGlow }) {
  return (
    <Container isGlow={isGlow}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default MainLayout;
