import React from "react";
import useAppointments from "./useAppointments";
import Loading from "../../components/modules/Loading";
import Empty from "../../components/modules/Empty";
import Table from "../../components/modules/Table";
import AppointmentRow from "./AppointmentRow";

function AppointmentTable() {
  const { appointments, isLoading } = useAppointments();
  if (isLoading) return <Loading />;

  if (!appointments.length) return <Empty resourceName="قرار ملاقاتی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>کاربر</th>
        <th>پزشک</th>
        <th>تاریخ ثبت</th>
        <th>نوبت رزو شده</th>
        <th>ویزیت</th>
        <th>وضعیت لغو</th>
        <th>وضعیت پرداخت</th>
        <th>وضعیت تکمیل</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {appointments.map((appointment, index) => (
          <AppointmentRow
            key={appointment._id}
            appointment={appointment}
            index={index}
          />
        ))}
      </Table.Body>
    </Table>
  );
}

export default AppointmentTable;
