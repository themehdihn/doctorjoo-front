import React from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";
import Container from "../Container";

function MainLayout({children,isGlow}) {
  return (
    <Container isGlow={isGlow}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default MainLayout;
