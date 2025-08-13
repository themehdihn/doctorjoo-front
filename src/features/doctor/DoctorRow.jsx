import React, { useState } from "react";
import Table from "../../components/modules/Table";
import truncateText from "../../utils/truncateText";
import { numberWithCommas } from "../../utils/toPersianNumber";
import Toggle from "../../components/modules/Toggle";

function DoctorRow({ doctor, index }) {
  const {
    name,
    email,
    image,
    speciality,
    degree,
    experience,
    about,
    available,
    fees,
    address,
    slots_booked,
  } = doctor;

  const [isAvailable, setIsAvailable] = useState(true);

  const toggleHandler = async () => {
    setIsAvailable((prev) => !prev); // بروزرسانی UI بلافاصله
  };

  return (
    <Table.Row>
      <th>{index + 1}</th>
      <th>{name}</th>
      <th>{email}</th>
      <th>
        <span className={`badge badge--secondary`}>{speciality}</span>
      </th>
      <th>{degree}</th>
      <th>{experience}</th>
      <th>{truncateText(about, 20)}</th>
      <th>{numberWithCommas(fees)}</th>
      <th>{address}</th>
      <th style={{ width: "7rem" }}>
        <Toggle
          enabled={isAvailable ? true : false}
          label={isAvailable ? "فعال" : "غیر فعال"}
          onChange={toggleHandler}
        />
      </th>
    </Table.Row>
  );
}

export default DoctorRow;
