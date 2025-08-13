import React, { useEffect } from "react";

import DoctorsWrapper from "../components/templates/Doctors/DoctorsWrapper";
import { doctorsData } from "../constants/doctorData";

import MainLayout from "../components/modules/MainLayout";
import DoctorCart from "../components/modules/DoctorCart";

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
