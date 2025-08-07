import CustomNavLink from "./CustomNavLink";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__logo-img"
          src="../../../public/logo.svg"
          alt=""
        />
      </div>
      {/* Logo */}

      <ul className="header__nav">
        <CustomNavLink to="/">صفحه اصلی</CustomNavLink>
        <CustomNavLink to="/doctors">پزشکان</CustomNavLink>
        <CustomNavLink to="/contact">تماس با ما</CustomNavLink>
        <CustomNavLink to="/about">درباره ما</CustomNavLink>
      </ul>
      {/* Nav */}
      <div className="header__actions">
        <a className="header__actions-btn" href="">
          ورود / ثبت نام
        </a>
      </div>
      {/* Actions */}
    </header>
  );
}

export default Header;
