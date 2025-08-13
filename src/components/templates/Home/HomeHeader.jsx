import { Link } from "react-router-dom";
import CustomNavLink from "../../modules/CustomNavLink";
import "./HomeHeader.css";
import HomeMenu from "./HomeMenu";
import useUser from "../../../hooks/useUser";

function Header() {
  const {isLoading, user} = useUser()
  return (
    <header className="home-header">
      <div className="home-header__logo">
        <img
          style={{ verticalAlign: "middle" }}
          className="home-header__logo-img"
          src="../../../public/logo.svg"
          alt=""
        />
      </div>
      {/* Logo */}

      <ul className="home-header__nav">
        <CustomNavLink to="/">صفحه اصلی</CustomNavLink>
        <CustomNavLink to="/doctors">پزشکان</CustomNavLink>
        <CustomNavLink to="/contact">تماس با ما</CustomNavLink>
        <CustomNavLink to="/about">درباره ما</CustomNavLink>
      </ul>
      {/* Nav */}
      <div className={`home-header__actions ${isLoading && "blur-sm"}`}>
        <HomeMenu user={user} />
      </div>
      {/* Actions */}
    </header>
  );
}

export default Header;
