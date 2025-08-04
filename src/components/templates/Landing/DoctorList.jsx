import DoctorCart from "./Cart/DoctorCart";
import "./DoctorList.css";

function DoctorList() {
  const doctorsData = [
    {
      id: 1,
      cover: "../../../../public/doctorjoo.png",
      doctorName: "مهدی حسینی",
      specialty: "متخصص قلب و عروق",
    },
    {
      id: 2,
      cover: "../../../../public/doctorjoo.png",
      doctorName: "مهدی حسینی",
      specialty: "متخصص قلب و عروق",
    },
    {
      id: 3,
      cover: "../../../../public/doctorjoo.png",
      doctorName: "مهدی حسینی",
      specialty: "متخصص قلب و عروق",
    },
    {
      id: 4,
      cover: "../../../../public/doctorjoo.png",
      doctorName: "مهدی حسینی",
      specialty: "متخصص قلب و عروق",
    },
    {
      id: 5,
      cover: "../../../../public/doctorjoo.png",
      doctorName: "مهدی حسینی",
      specialty: "متخصص قلب و عروق",
    },
  ];
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
        <a className="doctor__list-more-btn" href="">
          مشاهده همه
        </a>
      </div>
      {/* Show More Btn */}
    </section>
  );
}

export default DoctorList;
