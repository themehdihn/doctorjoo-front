import { Verify } from "iconsax-reactjs";
import "./DoctorBio.css";

function DoctorBio() {
  return (
    <div className="doctor-info">
      <div className="doctor-info__img-wrapper">
        <img
          className="doctor-info__img"
          src="../../public/doctorjoo.png"
          alt=""
        />
      </div>
      {/* Cover */}
      <div className="doctor-info__content">
        <p className="doctor-info__content-title">
          دکتر علی جعفری
          <Verify color="var(--color-primary)" size={24} />
        </p>
        {/* Doctor Name */}
        <div className="doctor-info__specialty">
            <p className="doctor-info__specialty-title">قلب و عروق</p>
            <span className="doctor-info__specialty-text">تخصص</span>
        </div>
        {/* Specialty */}
      </div>
      {/* Content */}
    </div>
  );
}

export default DoctorBio;
