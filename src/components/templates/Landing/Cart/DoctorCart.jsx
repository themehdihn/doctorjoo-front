import { ArrowLeft, Medal, User } from "iconsax-reactjs";
import "./DoctorCart.css";

function DoctorCart({ cover, doctorName, specialty }) {
  return (
    <div className="doctor-list__cart">
      <div className="doctor-list__cart-img-wrapper">
        <div className="doctor-list__cart-content-overlay">
          <div class="dot-container">
            <span class="dot-ping"></span>
            <span class="dot-static"></span>
          </div>
          فعال
        </div>
        <img src={cover} alt={doctorName} className="doctor-list__cart-img" />
      </div>
      {/* Cover */}
      <div className="doctor-list__cart-content">
        <h3 className="doctor-list__cart-title">
          {/* <User className="doctor-list__cart-icon" /> */}
          {/* <svg
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_642)">
              <path
                d="M9.33019 10.75C10.7442 10.75 12.1003 10.1837 13.1002 9.1757C14.1 8.16769 14.6617 6.80054 14.6617 5.375C14.6617 3.94946 14.1 2.58231 13.1002 1.5743C12.1003 0.566293 10.7442 0 9.33019 0C7.91618 0 6.56008 0.566293 5.56022 1.5743C4.56037 2.58231 3.99865 3.94946 3.99865 5.375C3.99865 6.80054 4.56037 8.16769 5.56022 9.1757C6.56008 10.1837 7.91618 10.75 9.33019 10.75ZM5.33154 13.068C2.24924 13.9792 0 16.8515 0 20.2528C0 20.9415 0.55398 21.5 1.23708 21.5H17.4233C18.1064 21.5 18.6604 20.9415 18.6604 20.2528C18.6604 16.8515 16.4111 13.9792 13.3288 13.068V15.2012C14.4785 15.4993 15.3282 16.5533 15.3282 17.8047V19.4844C15.3282 19.8539 15.0283 20.1562 14.6617 20.1562H13.9953C13.6287 20.1562 13.3288 19.8539 13.3288 19.4844C13.3288 19.1148 13.6287 18.8125 13.9953 18.8125V17.8047C13.9953 17.0614 13.3997 16.4609 12.6624 16.4609C11.9251 16.4609 11.3295 17.0614 11.3295 17.8047V18.8125C11.6961 18.8125 11.996 19.1148 11.996 19.4844C11.996 19.8539 11.6961 20.1562 11.3295 20.1562H10.6631C10.2965 20.1562 9.99663 19.8539 9.99663 19.4844V17.8047C9.99663 16.5533 10.8463 15.4993 11.996 15.2012V12.8034C11.746 12.7782 11.492 12.7656 11.2337 12.7656H7.42666C7.16842 12.7656 6.91434 12.7782 6.66442 12.8034V15.5497C7.6266 15.8395 8.33053 16.7381 8.33053 17.8047C8.33053 19.1022 7.28504 20.1562 5.99798 20.1562C4.71091 20.1562 3.66543 19.1022 3.66543 17.8047C3.66543 16.7381 4.36936 15.8395 5.33154 15.5497V13.068ZM5.99798 18.8125C6.26311 18.8125 6.51737 18.7063 6.70485 18.5173C6.89232 18.3283 6.99764 18.072 6.99764 17.8047C6.99764 17.5374 6.89232 17.2811 6.70485 17.0921C6.51737 16.9031 6.26311 16.7969 5.99798 16.7969C5.73285 16.7969 5.47858 16.9031 5.29111 17.0921C5.10364 17.2811 4.99832 17.5374 4.99832 17.8047C4.99832 18.072 5.10364 18.3283 5.29111 18.5173C5.47858 18.7063 5.73285 18.8125 5.99798 18.8125Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_642">
                <rect width="18.6604" height="21.5" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
          {doctorName}
        </h3>
        <p className="doctor-list__cart-description">
          <Medal className="doctor-list__cart-icon" />
          {specialty}
        </p>
        <a href="#" className="doctor-list__cart-cta">
          دریافت نوبت
          <ArrowLeft className="doctor-list__cart-cta-icon" />
        </a>
      </div>
      {/* Cart Content */}
    </div>
  );
}

export default DoctorCart;
