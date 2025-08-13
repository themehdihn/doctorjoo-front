import "./Stat.css";

const colors = {
  primary: "badge--primary",
  green: "badge badge--green",
  yellow: "badge badge--yellow",
  pink: "badge badge--pink",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="stat">
      <div className={`stat__icon ${colors[color]}`}>{icon}</div>
      {/* Icon */}
      <h4 className="stat__title">{title}</h4>
      <p className="stat__text">{value}</p>
    </div>
  );
}

export default Stat;
