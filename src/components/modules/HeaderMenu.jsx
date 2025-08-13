import { Home, User } from "iconsax-reactjs";
import "./HeaderMenu.css";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";

function HeaderMenu() {
  return (
    <ul style={{display:"flex",alignItems:"center",columnGap:"1.6rem"}} className="flex gap-x-4 items-center">
      <li className="flex">
        <Link to="dashboard">
          {/* <HiOutlineUser className="size-5 text-primary-900" /> */}
          <User size={20}/>
        </Link>
      </li>

      <li style={{display:"flex"}}>
        <Link to="/">
          {/* <HiHome className="size-5 text-primary-900" /> */}
          <Home size={20}/>
        </Link>
      </li>
      <li style={{display:"flex"}}>
        <LogOut />
      </li>
    </ul>
  );
}

export default HeaderMenu;
