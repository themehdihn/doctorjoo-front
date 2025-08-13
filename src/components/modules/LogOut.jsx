import { LogoutCurve } from "iconsax-reactjs";
import useLogout from "../../hooks/useLogout";
import Loading from "./Loading";

import "./LogOut.css"

function LogOut() {
  const { logout, isPending } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <div className="logout" onClick={logout}>
      <LogoutCurve className="logout__icon" />
      <span className="logout__text">خروج</span>
    </div>
  );
}

export default LogOut;
