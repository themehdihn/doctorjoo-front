import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img
            className="footer__logo-image"
            src="../../../public/logo.svg"
            alt="لوگوی دکتر جو"
          />
          <div className="footer__description">
            <p>
              پلتفرم هوشمند رزرو نوبت دکتر جو یک پلتفرم آزمایشی جهت رزرو آنلاین
              نوبت با انواعی از پزشک‌های متخصص را فراهم می‌کند که شما بتوانید در
              سریع‌ترین حالت ممکن پزشک مد نظر خود را پیدا کرده و با ایشان وقت
              ویزیت یا مشاوره رزرو نمایید. این پروژه توسط مهدی حسینی جهت تدریس
              در کلاس آنلاین برنامه‌نویسی فرانت‌اند تدارک دیده شده است :)
            </p>
          </div>
        </div>
        {/* Logo and Description */}

        <div className="footer__links">
          <h2 className="footer__links-title">لینک ها</h2>
          <ul className="footer__menu">
            <li className="footer__menu-item">صفحه اصلی</li>
            <li className="footer__menu-item">درباره ما</li>
            <li className="footer__menu-item">تماس با ما</li>
            <li className="footer__menu-item">سوالات متداول</li>
          </ul>
        </div>
        {/* Links */}

        <div className="footer__contact">
          <h2 className="footer__links-title">تماس با ما</h2>
          <ul className="footer__menu">
            <li className="footer__menu-item">ایمیل: info@doctorjo.com</li>
            <li className="footer__menu-item">تلفن: 021-12345678</li>
            <li className="footer__menu-item">آدرس: همدان، خیابان نمونه</li>
            <li className="footer__menu-item">پشتیبانی: 24/7</li>
          </ul>
        </div>
        {/* Contact */}

        <div className="footer__enamad">
           
          <div className="footer__enamad-image">
            <img className="footer__enamad-image-img" src="../../public/enamad.webp" alt="نماد اعتماد الکترونیکی" />
          </div>
        </div>
        {/* Enamad */}
      </div>
      {/* Wrapper */}
    </footer>
  );
}

export default Footer;
