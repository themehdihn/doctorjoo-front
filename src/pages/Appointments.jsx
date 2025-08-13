import React from "react";
import AppointmentTable from "../features/appointment/AppointmentTable";
import PanelTitle from "../features/PanelTitle";


function Appointments() {
  return (
    <>
      <PanelTitle title="نوبت ها" />
      <AppointmentTable />
    </>
  );
}

export default Appointments;
