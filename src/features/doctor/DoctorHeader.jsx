import React, { useState } from "react";
import "./DoctorHeader.css";
import PanelTitle from "../PanelTitle";
import { Add } from "iconsax-reactjs";
import Modal from "../../components/modules/Modal";
import CreateDoctor from "./createDoctor";
import Button from "../../components/modules/Button";

function DoctorHeader() {
  const [openCreateDoc, setOpenCreateDoc] = useState(false);

  return (
    <div className="doctor-header">
      <PanelTitle title="پزشکان" />

      <Button
        onClick={() => setOpenCreateDoc(true)}
        className="doctor-header__btn"
      >
        <Add size={24} />
        <span>اضافه کردن پزشک جدید</span>
      </Button>
      <Modal
        title="اضافه کردن پزشک جدید"
        open={openCreateDoc}
        onClose={() => setOpenCreateDoc(false)}
      >
        <CreateDoctor onClose={() => setOpenCreateDoc(false)} />
      </Modal>
    </div>
  );
}

export default DoctorHeader;
