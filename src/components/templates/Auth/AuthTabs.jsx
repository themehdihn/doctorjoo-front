import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./AuthTabs.css";
import { useNavigate, useRevalidator } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp } from "../../../services/authService";
import toast from "react-hot-toast";

function AuthTabs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
const queryClient = useQueryClient();
  const { user } = useUser();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    isPending: isSigningUp,
    mutateAsync: signUpReq,
  } = useMutation({
    mutationFn: signUp,
  });

  const { isPending: isSigningIn, mutateAsync: signInReq } = useMutation({
    mutationFn: signIn,
  });

  const onLoginSubmit = async (data) => {
    console.log("Form data:", data);
    try {
      const { message } = await signInReq(data);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const onRegisterSubmit = async (data) => {
    console.log("Form data:", data);
    try {
      const { message } = await signUpReq(data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="auth-tabs">
      {/* تب‌ها */}
      <div className="auth-tabs__header">
        <div
          className={`auth-tabs__tab ${
            activeTab === "login" ? "auth-tabs__tab--active" : ""
          }`}
          onClick={() => setActiveTab("login")}
        >
          ورود
        </div>
        <div
          className={`auth-tabs__tab ${
            activeTab === "register" ? "auth-tabs__tab--active" : ""
          }`}
          onClick={() => setActiveTab("register")}
        >
          ثبت‌نام
        </div>
      </div>

      {/* محتوای تب‌ها */}
      <div className="auth-tabs__content">
        {activeTab === "login" ? (
          <Login
            onSubmit={onLoginSubmit}
            isSigningIn={isSigningIn}
          />
        ) : (
          <Register
            onSubmit={onRegisterSubmit}
            isSigningUp={isSigningUp}
          />
        )}
      </div>
    </div>
  );
}

export default AuthTabs;
