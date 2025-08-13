import React from "react";
import "./HomeMenu.css";
import { Link } from "react-router-dom";
import { User } from "iconsax-reactjs";
import UserAvatar from "../../modules/UserAvatar";
import LogOut from "../../modules/LogOut";

function HomeMenu({ user }) {
  return (
    <ul className="home-menu">
      {user ? (
        <>
        <li style={{ display: "flex" }}>
          <Link
            to={`${
              user.role === "ADMIN"
                ? "/admin"
                : user.role === "USER"
                ? "/user-panel"
                : "/doctor"
            } `}
          >
          </Link>
        </li>
        <li>
            <UserAvatar/>
        </li>
        <li>
            <LogOut/>
        </li>
        </>
      ) : (
        <Link to="/auth" className="home-menu__actions-btn" href="">
          ورود | ثبت نام
        </Link>
      )}
    </ul>
  );
}

export default HomeMenu;
