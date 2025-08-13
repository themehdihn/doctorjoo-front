import React from "react";
import TextField from "../../modules/TextField";
import Loading from "../../modules/Loading";
import Button from "../../modules/Button";
import { useForm } from "react-hook-form";
import RHFTextField from "../../modules/RHFTextField";

function Login({ onSubmit, isSigningIn }) {

   const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <RHFTextField
        label="ایمیل"
        name="email"
        type="email"
        register={register}
        required
        validationSchema={{
          required: "ایمیل الزامی است",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "ایمیل معتبر وارد کنید",
          },
        }}
        errors={errors}
      />

      <RHFTextField
        label="رمز عبور"
        name="password"
        type="password"
        register={register}
        required
        validationSchema={{
          required: "رمز عبور الزامی است",
          minLength: { value: 6, message: "حداقل ۶ کاراکتر وارد کنید" },
        }}
        errors={errors}
      />

      {isSigningIn ? (
        <Loading />
      ) : (
        <Button style={{ width: "100%", marginTop: "2rem" }} type="submit">
          ورود به سایت
        </Button>
      )}
    </form>
  );
}

export default Login;
