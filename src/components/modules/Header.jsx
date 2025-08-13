import { HamburgerMenu } from "iconsax-reactjs";
import useUser from "../../hooks/useUser";
import "./Header.css";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";

function Header() {
  const { user, isLoading } = useUser();

  return (
    <div className="header">
      <div className="header__wrapper container">
        <div>
          <p>{user?.name} خوش آمدی 😍</p>
          <button
            //   onClick={onOpen}
            className="header__btn"
          >
            {/* <HiMenuAlt3 className="size-full text-secondary-900" /> */}
            <HamburgerMenu className="header__btn-icon" />
          </button>
        </div>
        <div className={`header__actions ${isLoading && "blur-sm opacity-50"}`}>
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
