import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Container from "../components/Container";

import toast from "react-hot-toast";
import SlotSelector from "../components/modules/SlotSelector";

import "../styles/doctor-details.css";
import { AppContext } from "../context/AppContext";
import axios from "axios";

function DoctorDetails() {
  const { docId } = useParams();
  const { doctors, currencySymbol, token, backendUrl, getDoctorsData } =
    useContext(AppContext);

  const getPersianDayOfWeek = (date) => {
    return date.toLocaleDateString("fa-IR", { weekday: "long" });
  };

  // تابع کمکی برای نمایش روز ماه شمسی
  const getPersianDate = (date) => {
    return date.toLocaleDateString("fa-IR", { day: "2-digit" });
  };

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [docSlots]);
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const checkSlotAvailable = (docInfo, slotDate, slotTime) => {
    if (!docInfo || !docInfo.slots_booked) return true; // if  docinfo is null
    return !docInfo.slots_booked?.[slotDate]?.includes(slotTime);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    const today = new Date();

    const generateSlotDate = (date) =>
      `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;

    // تابع برای فرمت زمان به فارسی
    const formatPersianTime = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      let period;
      if (hours >= 0 && hours < 12) {
        period = "صبح";
      } else if (hours >= 12 && hours < 18) {
        period = "بعد از ظهر";
      } else {
        period = "عصر";
      }
      return `${hours}:${minutes} ${period}`;
    };

    for (let i = 0; i < 10; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      // تنظیم زمان شروع
      if (i === 0) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      const timeSlots = [];

      while (currentDate < endTime) {
        const formattedTime = formatPersianTime(currentDate);
        const slotDate = generateSlotDate(currentDate);
        const isAvailable = checkSlotAvailable(
          docInfo,
          slotDate,
          formattedTime
        );

        if (isAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      // اگر اسلاتی موجود نبود، یک placeholder اضافه کن
      if (timeSlots.length === 0) {
        timeSlots.push({ datetime: new Date(currentDate), time: false });
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    // if (!token) {
    //   toast.warn("Login to book appointment");
    //   return navigate("/login");
    // }

    if (!slotTime) {
      return toast.error("Please select the slot time");
    }
    try {
      const date = docSlots[slotIndex][0].datetime;

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      const slotDate = day + "_" + month + "_" + year;
      const obj = {
        docId,
        slotDate,
        slotTime,
      };
      console.log("دیتا", obj);
      const { data } = await axios.post(
        "http://localhost:4000/api/appointment/book-appointment",
        { docId, slotDate, slotTime },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error:", error);
      toast.error(error.message);
    }
  };

  console.log("frfrfrfr", slotTime);

  return (
    <MainLayout>
      <Container>
        <div>دکتر با ایدی {docId}</div>
        <div className="doctor-details">
          {/* Doctor Details Section */}
          <div className="doctor-details__container">
            <div className="doctor-details__image-wrapper">
              <img
                className="doctor-details__image"
                src={docInfo?.image}
                //  src="../../public/doctorjoo.png"
                // alt={`${docInfo.name}'s profile`}
              />
            </div>

            <div className="doctor-details__info">
              {/* Doc info: name, degree, experience */}
              <p className="doctor-details__name">
                {docInfo?.name}

                {/* <img
                  className="doctor-details__verified-icon"
                  src={assets.verified_icon}
                  alt="Verified"
                /> */}
              </p>
              <div className="doctor-details__credentials">
                <p className="doctor-details__degree">
                  {/* {docInfo.degree} - {docInfo.speciality} */}
                  فوق تخصص - قلب و عروق
                </p>
                <button className="doctor-details__experience">
                  {/* {docInfo.experience} */}2 سال
                </button>
              </div>

              {/* Doctor About */}
              <div className="doctor-details__about">
                <p className="doctor-details__about-title">
                  About{" "}
                  {/* <img
                    className="doctor-details__info-icon"
                    src={assets.info_icon}
                    alt="Info"
                  /> */}
                </p>
                <p className="doctor-details__about-text">
                  {/* {docInfo.about} */}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aperiam quae quos inventore repellendus porro,
                  eveniet sequi explicabo iusto autem reiciendis? Ducimus
                  deleniti cum eaque ab aut natus! Neque delectus aliquid natus,
                  consequatur qui quae possimus ut autem placeat et voluptatibus
                  blanditiis earum repudiandae modi molestias. Soluta ea
                  quisquam suscipit illo laborum, quibusdam optio, architecto
                  aspernatur at aliquid debitis pariatur iure. Adipisci
                  praesentium magnam recusandae similique error odit maxime sed
                  veniam facere, odio dolorem cumque nihil animi voluptas
                  laudantium perspiciatis quaerat, optio, enim reiciendis
                  architecto a accusantium quis beatae! Officia voluptates sit
                  dolore odit numquam commodi, ut provident id neque!
                </p>
              </div>
              <p className="doctor-details__fee">
                Appointment fee:{" "}
                <span className="doctor-details__fee-amount">
                  45,000
                  {/* {docInfo.fees} */}
                </span>
              </p>
            </div>
          </div>

          {/* Booking Slots Section */}
          <div className="doctor-details__booking">
            <p className="doctor-details__booking-title">Booking slots</p>
            <div className="doctor-details__slots">
              {docSlots.length &&
                docSlots.map((item, index) => (
                  <div
                    onClick={() => setSlotIndex(index)}
                    className={`doctor-details__slot ${
                      slotIndex === index ? "doctor-details__slot--active" : ""
                    }`}
                    key={index}
                  >
                    <p>{item[0] && getPersianDayOfWeek(item[0].datetime)}</p>
                    <p>{item[0] && getPersianDate(item[0].datetime)}</p>
                  </div>
                ))}
            </div>

            <SlotSelector
              docSlots={docSlots}
              slotIndex={slotIndex}
              slotTime={slotTime}
              setSlotTime={setSlotTime}
            />
            <button
              onClick={bookAppointment}
              className="doctor-details__book-button"
            >
              Book an appointment
            </button>
          </div>

          {/* Related Doctors Section */}
          {/* <RelatedDoctors docId={docId} speciality={docIn÷fo.speciality} /> */}
        </div>
      </Container>
    </MainLayout>
  );
}

export default DoctorDetails;
