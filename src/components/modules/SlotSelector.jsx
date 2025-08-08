import { useEffect, useRef } from "react";
import "./SlotSelector.css";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";

const SlotSelector = ({ docSlots, slotIndex, slotTime, setSlotTime }) => {
    console.log("fdffrrfrfrfr",docSlots[slotIndex])
  return (
    <div className="slot-selector">
     
      {/* Scrollable Slots Container */}
      <div className="slot-selector__scroll-container">
        <div className="slot-selector__slots">
          {docSlots.length > 0 &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => item.time && setSlotTime(item.datetime)} // فقط برای اسلات‌های معتبر
                className={`slot-selector__slot ${
                  item.time && slotTime === item.datetime
                    ? "slot-selector__slot--active"
                    : ""
                } ${!item.time ? "slot-selector__slot--disabled" : ""}`}
                key={index}
              >
                {item.time === false || !item.time ? "بدون نوبت" : item.time}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SlotSelector;
