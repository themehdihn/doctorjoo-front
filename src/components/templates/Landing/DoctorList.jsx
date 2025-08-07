import DoctorCart from "../../modules/Cart/DoctorCart";
import { doctorsData } from "../../../constants/doctorData";
import "./DoctorList.css";
import { Link } from "react-router-dom";

function DoctorList() {
  return (
    <section className="doctor-list">
      <div className="doctor-list__content">
        <h2 className="doctor-list__title">لیست پزشکان</h2>
        {/* Heading */}
        <div className="doctor-list__description-wrapper">
          <p className="doctor-list__description">
            در این بخش می‌توانید لیست پزشکان را مشاهده کنید و با توجه به تخصص و
            نظرات بیماران، بهترین انتخاب را داشته باشید.
          </p>
        </div>

        <div className="doctor-list__separator"></div>
        {/* Separator */}
      </div>
      {/* Content */}
      <div className="doctor-list__wrapper">
        {doctorsData.map((item) => (
          <DoctorCart {...item} />
        ))}
        {/* Cart */}
      </div>
      {/* DoctorList Wrapper */}

      <div className="doctor__list-more">
        <Link to="/doctors" className="doctor__list-more-btn" href="">
          مشاهده همه
        </Link>
      </div>
      {/* Show More Btn */}
    </section>
  );
}

export default DoctorList;
