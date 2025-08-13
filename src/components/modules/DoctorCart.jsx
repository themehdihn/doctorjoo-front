import { ArrowLeft, Medal } from "iconsax-reactjs";
import "./DoctorCart.css";
import { Link } from "react-router-dom";

function DoctorCart({ _id, image, name, speciality, available,about }) {
  return (
    <div className="doctor-card">
      <div className="doctor-card__img-wrapper">
        
        <img src={image} alt={name} className="doctor-card__img" />
      </div>

      <div className="doctor-card__content">
        <h3 className="doctor-card__content-title">{name}</h3>
        <p className="doctor-card__content-speciality">
          <Medal className="doctor-card__content-icon" />
          {speciality}
        </p>
        <Link to={`/doctors/${_id}`} className="doctor-card__cta">
          دریافت نوبت
          <ArrowLeft className="doctor-card__content-cta-icon" />
        </Link>
      </div>
    </div>
  );
}

export default DoctorCart;
