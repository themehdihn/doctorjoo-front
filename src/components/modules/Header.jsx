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
        <li className="header__nav-item">صفحه اصلی</li>
        <li className="header__nav-item">صفحه اصلی</li>
        <li className="header__nav-item">صفحه اصلی</li>
        <li className="header__nav-item">صفحه اصلی</li>
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
