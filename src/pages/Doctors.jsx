import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import DoctorsWrapper from "../components/templates/Doctors/DoctorsWrapper";
import { doctorsData } from "../constants/doctorData";
import DoctorCart from "../components/modules/Cart/DoctorCart";

function Doctors() {
  return (
    <MainLayout>
      <DoctorsWrapper>
        {doctorsData.map((doctor) => (
          <>
            <DoctorCart {...doctor} />
          </>
        ))}
      </DoctorsWrapper>
    </MainLayout>
  );
}

export default Doctors;
