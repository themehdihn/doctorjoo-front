import TextField from "../../modules/TextField";
import Button from "../../modules/Button";
import "./Register.css";
import Loading from "../../modules/Loading";
import { useForm } from "react-hook-form";

function Register({ onSubmit, isSigningUp }) {
const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        label="نام و نام خانوادگی"
        name="name"
        register={register}
        required
        validationSchema={{
          required: "نام و نام خانوادگی الزامی است",
          minLength: { value: 3, message: "حداقل ۳ کاراکتر باید وارد کنید" },
        }}
        errors={errors}
      />
      <TextField
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

      <TextField
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
      {isSigningUp ? (
        <Loading />
      ) : (
        <Button style={{ width: "100%", marginTop: "2rem" }} type="submit">
          ثبت نام
        </Button>
      )}
    </form>
  );
}

export default Register;
