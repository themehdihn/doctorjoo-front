import React from "react";
import Table from "../../components/modules/Table";

function UserRow({ user, index }) {
  const { name, email, gender, role } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>
        <span className="badge badge--secondary">{role}</span>
      </td>
      <td>عملیات</td>
    </Table.Row>
  );
}

export default UserRow;
