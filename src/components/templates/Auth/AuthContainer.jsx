import TextField from "../../modules/TextField";
import "./AuthContainer.css";
import Login from "./Login";
import Register from "./Register";
import Auth from "../../../pages/Auth";
import AuthTabs from "./AuthTabs";

function AuthContainer() {
  return (
    <div className="auth-page">
      <div className="auth-page__wrapper">
        <AuthTabs />
      </div>
    </div>
  );
}

export default AuthContainer;
