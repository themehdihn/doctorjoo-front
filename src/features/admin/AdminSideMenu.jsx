import React from "react";
import CustomNavLink from "../../components/modules/CustomNavLink";

function AdminSideMenu() {
  return (
    <ul className="flex flex-col gap-y-4">
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <img src="../../../public/logo.svg" alt="" />
      </div>
      {/* logo */}

      <CustomNavLink to="dashboard">
        <span>داشبورد</span>
      </CustomNavLink>

      <CustomNavLink to="appointments">
        <span>نوبت ها</span>
      </CustomNavLink>

      <CustomNavLink to="doctors">
        <span>پزشکان</span>
      </CustomNavLink>
      <CustomNavLink to="users">
        <span>کاربران</span>
      </CustomNavLink>
    </ul>
  );
}

export default AdminSideMenu;
