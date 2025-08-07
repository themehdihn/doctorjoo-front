import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Container from "../components/Container";
import DoctorBio from "../components/templates/DoctorDetails/DoctorBio";

function DoctorDetails() {
  const { id: doctorId } = useParams();
  return (
    <MainLayout>
      <Container>
        <div>دکتر با ایدی {doctorId}</div>
        <DoctorBio/>
      </Container>
    </MainLayout>
  );
}

export default DoctorDetails;
