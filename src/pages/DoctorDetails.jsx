import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "../components/modules/Container";

import toast from "react-hot-toast";
import SlotSelector from "../components/modules/SlotSelector";

import "../styles/doctor-details.css";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { Clock, InfoCircle, Location, Money } from "iconsax-reactjs";
import { formatToShamsiDate, toLocalDateShort } from "../utils/dateFormatter";
import MainLayout from "../components/modules/MainLayout";

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
      return `${hours}:${minutes}`;
    };

    for (let i = 0; i < 14; i++) {
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
        <div className="doctor-details">
          <div className="doctor-details__wrapper">
            <div className="doctor-details__content">
              <div className="doctor-details__content-cover-wrapper">
                <img
                  className="doctor-details__content-cover-img"
                  src="../../public/doctorjoo.png"
                  alt=""
                />
              </div>
              {/* Doctor Image */}
              <div className="doctor-details__content-info">
               <div className="doctor-details__content-info-wrapper">
                 <h2 className="doctor-details__content-info-name">
                  دکتر علی جعفری
                </h2>
                <p className="doctor-details__content-info-specialty">
                  متخصص قلب و عروق
                </p>
                <p className="doctor-details__content-info-address">
                  <Location size={20}/>
                  آدرس مطب: همدان کوچه فلان خیابان فلان مجتمع فلان
                </p>
                <p className="doctor-details__content-info-firstappo">
                  <Clock size={20}/>
                  اولین نوبت در دسترس : دوشنبه ۲۹ مرداد
                </p>
               </div>
               {/* Info Wrapper */}
               <p className="doctor-details__content-info-fees">
                <Money size={24}/>
                55,000 تومان
               </p>
               {/* Fees */}
              </div>
              {/* Info */}
            </div>
            {/* Contetnt */}

            <div className="doctor-details__bio">
              <h2 className="doctor-details__bio-title">
                <InfoCircle size={20} />
                درباره دکتر مهدی حسینی
              </h2>
              <p className="doctor-details__bio-description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            {/* Bio */}

            <div className="doctor-details__comment">نظرات اینجا هندل میشه</div>
            {/* Comment */}
          </div>
          {/* Wrapper */}

          <div className="doctor-details__calender">
            <div className="doctor-details__calender-top">
              <h2 className="doctor-details__calender-title">تقویم</h2>
              <span className="doctor-details__calender-date">
                {formatToShamsiDate(Date.now())}
              </span>
            </div>
            {/* Top */}
            <div className="doctor-details__calender-slots">
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
            {/* Slots */}

            <SlotSelector
              docSlots={docSlots}
              slotIndex={slotIndex}
              slotTime={slotTime}
              setSlotTime={setSlotTime}
            />
            <button
              onClick={bookAppointment}
              className="doctor-details__calender-button"
            >
              رزرو نوبت
            </button>
          </div>
          {/* Calender */}
        </div>
        {/* Doctor Details */}
      </Container>
    </MainLayout>
  );
}

export default DoctorDetails;
