import DoctorCart from "../../modules/Cart/DoctorCart";
import { doctorsData } from "../../../constants/doctorData";
import "./DoctorList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function DoctorList() {
  const [data,setDate]=useState([])
   useEffect(() => {
        console.log("landing render")
      fetch("http://localhost:4000/api/doctor/all-doctor")
        .then((res) => res.json())
        .then((data) => {
          console.log("data",data.data.doctors);
          setDate(data.data.doctors)
        });
    }, []);
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
        {data.map((item) => (
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
