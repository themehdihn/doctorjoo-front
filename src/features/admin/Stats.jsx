import { Calendar, Messages1, Personalcard, Profile2User } from "iconsax-reactjs";
import Stat from "../../components/modules/Stat";
import "./Stats.css";

function Stats() {
  const data = [
    { id: 1, name: "1" },
    { id: 1, name: "1" },
    { id: 1, name: "1" },
  ];

  return (
    <div className="stats">
      <Stat
        title="نوبت ها"
        value={data.length}
        color="primary"
        icon={<Calendar className="stats__icon" size={20} />}
      />
      <Stat
        title="پزشکان"
        value={data.length}
        color="primary"
        icon={<Personalcard className="stats__icon" size={20} />}
      />
      {/* <Stat
        title="کاربران"
        value={data.length}
        color="primary"
        icon={<Profile2User className="stats__icon" size={20} />}
      /> */}
       <Stat
        title="نظرات"
        value={data.length}
        color="primary"
        icon={<Messages1 className="stats__icon" size={20} />}
      />
    </div>
  );
}

export default Stats;
