import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "../../components/modules/TextField";
import TextArea from "../../components/modules/TextArea";
import RHFSelect from "../../components/modules/RHFSelect";
import Button from "../../components/modules/Button";
import useCreateDoctor from "./useCreateDoctor";
import { CloseCircle } from "iconsax-reactjs";
import RHFTextField from "../../components/modules/RHFTextField";
import "./CreateDoctor.css";

const options = [
  { label: "فعال", value: true },
  { label: "غیر فعال", value: false },
];

function CreateDoctor({ onClose, doctorToEdit = {} }) {
  const { _id: editId } = doctorToEdit;
  const isEditDoctor = Boolean(editId);

  const {
    name,
    email,
    speciality,
    degree,
    experience,
    about,
    available,
    fees,
    image: prevDoctorCoverImageUrl,
  } = doctorToEdit;
  let editValues = {};
  if (isEditDoctor) {
    editValues = {
      name,
      email,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      image,
    };
  }

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
    control,
  } = useForm({ defaultValues: editValues });

  const { isCreating, createDoctor } = useCreateDoctor();

  const [coverImageUrl, setCoverImageUrl] = useState(
    prevDoctorCoverImageUrl || null
  );

  // وقتی پزشک برای ویرایش میاد، عکس رو به فایل تبدیل و مقدار فیلد image رو ست می‌کنیم
  useEffect(() => {
    if (prevDoctorCoverImageUrl) {
      async function fetchImageAsFile() {
        const file = await imageUrlToFile(prevDoctorCoverImageUrl);
        setValue("image", file);
      }
      fetchImageAsFile();
    }
  }, []);

  const onSubmit = (data) => {
      if (typeof data.available === "string") {
    data.available = data.available === "true";
  }
  
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }
    console.log("darrrrr",formData)

    if (isEditDoctor) {
      editCategory(
        { id: doctorToEdit._id, newDoctor: formData },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        }
      );
    } else {
      createDoctor(formData, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="create-doctor-form">
      <RHFTextField
        label="نام پزشک"
        name="name"
        required
        register={register}
        validationSchema={{
          required: "نام پزشک ضروری است",
          minLength: { value: 5, message: "حداقل ۵ کاراکتر باشد" },
        }}
        errors={errors}
      />

      <RHFTextField
        label="آدرس ایمیل"
        name="email"
        required
        register={register}
        validationSchema={{
          required: "ایمیل ضروری است",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "ایمیل معتبر وارد کنید",
          },
        }}
        errors={errors}
      />

      <RHFTextField
        label="رمز عبور"
        name="password"
        required={!isEditDoctor} // اجباری فقط برای ایجاد هست
        register={register}
        validationSchema={
          !isEditDoctor
            ? {
                required: "رمز عبور ضروری است",
                minLength: { value: 6, message: "حداقل ۶ کاراکتر باشد" },
              }
            : {}
        }
        errors={errors}
      />

      <Controller
        control={control}
        name="image"
        rules={{ required: "عکس کاور پست الزامی است" }}
        render={({ field: { value, onChange, ...field } }) => (
          <TextField
            {...field}
            value={value?.fileName}
            onChange={(event) => {
              const file = event.target.files[0];
              onChange(file);
              setCoverImageUrl(URL.createObjectURL(file));
            }}
            label="کاور پست"
            type="file"
            required
            id="image"
            name="image"
          />
        )}
      />

      {coverImageUrl && (
        <div className="cover-image">
          <img
            className="cover-image__img"
            alt="cover-image"
            src={coverImageUrl}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <Button
            type="button"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("image", null);
            }}
            variant="red"
            className="cover-image__remove-btn"
          >
            <CloseCircle />
          </Button>
        </div>
      )}

      <RHFTextField
        label="حوزه تخصص"
        name="speciality"
        required
        register={register}
        validationSchema={{
          required: "حوزه تخصص ضروری است",
        }}
        errors={errors}
      />

      <RHFTextField
        label="مدرک"
        name="degree"
        required
        register={register}
        validationSchema={{
          required: "مدرک ضروری است",
        }}
        errors={errors}
      />

      <RHFTextField
        label="سابقه"
        name="experience"
        required
        register={register}
        validationSchema={{
          required: "سابقه ضروری است",
        }}
        errors={errors}
      />

      <TextArea
        name="about"
        label="بیوگرافی"
        register={register}
        isRequired
        validationSchema={{
          required: "بیوگرافی ضروری است",
        }}
        errors={errors}
      />

      <RHFSelect
        label="وضعیت"
        required
        name="available"
        register={register}
        options={options}
        errors={errors}
      />

      <RHFTextField
        label="حق ویزیت"
        name="fees"
        required
        register={register}
        validationSchema={{
          required: "حق ویزیت ضروری است",
          pattern: { value: /^[0-9]+$/, message: "فقط عدد وارد کنید" },
        }}
        errors={errors}
      />

      <div className="form-actions" style={{ marginTop: 20 }}>
        <Button style={{ width: "100%",fontSize:"1rem" ,padding:"1rem" }} disabled={isCreating}>
          {isEditDoctor ? "ویرایش" : "ثبت پزشک"}
        </Button>
      </div>
    </form>
  );
}

export default CreateDoctor;
