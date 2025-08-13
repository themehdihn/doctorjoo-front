import React from "react";
import useDoctors from "../../hooks/useDoctors";
import Loading from "../../components/modules/Loading";
import Empty from "../../components/modules/Empty";
import Table from "../../components/modules/Table";
import DoctorRow from "./DoctorRow";

function DoctorTable() {
  const { isLoading, doctors } = useDoctors();

  if (isLoading) return <Loading />;

  if (!doctors?.length) return <Empty resourceName="پزشکی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام پزشک</th>
        <th>ایمیل</th>
        <th>تخصص</th>
        <th>مدرک</th>
        <th>سابقه</th>
        <th>بیو گرافی</th>
        <th>حق ویزیت</th>
        <th>آدرس</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {doctors?.map((doctor, index) => (
          <DoctorRow key={doctor._id} doctor={doctor} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default DoctorTable;
