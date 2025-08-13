import useUser from "../../hooks/useUser";
import "./UserAvatar.css";

function UserAvatar() {
  const { user } = useUser();

  return (
    <div className="user-avatar">
      <img className="user-avatar__img" src="../../../user.jpg" alt="" />
      <span className="user-avatar__name">{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
