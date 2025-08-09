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
        </div>