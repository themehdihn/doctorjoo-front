export const doctorFieldsConfig = [
  {
    component: "text",
    label: "نام پزشک",
    name: "name",
    required: true,
    validation: {
      required: "نام پزشک ضروری است",
      minLength: { value: 5, message: "حداقل ۵ کاراکتر باشد" },
    },
  },
  {
    component: "text",
    label: "ایمیل",
    name: "email",
    required: true,
    validation: {
      required: "ایمیل ضروری است",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "ایمیل معتبر وارد کنید",
      },
    },
  },
  {
    component: "text",
    label: "رمز عبور",
    name: "password",
    required: !isEditSession, // در حالت ویرایش اجباری نیست
    validation: !isEditSession
      ? {
          required: "رمز عبور ضروری است",
          minLength: { value: 6, message: "حداقل ۶ کاراکتر باشد" },
        }
      : {},
  },
  {
    component: "text",
    label: "حوزه تخصص",
    name: "speciality",
    required: true,
    validation: { required: "حوزه تخصص ضروری است" },
  },
  {
    component: "text",
    label: "مدرک",
    name: "degree",
    required: true,
    validation: { required: "مدرک ضروری است" },
  },
  {
    component: "text",
    label: "سابقه",
    name: "experience",
    required: true,
    validation: { required: "سابقه ضروری است" },
  },
  {
    component: "textarea",
    label: "بیوگرافی",
    name: "about",
    required: true,
    validation: {
      required: "بیوگرافی ضروری است",
      minLength: { value: 10, message: "حداقل ۱۰ کاراکتر باشد" },
    },
  },
  {
    component: "select",
    label: "وضعیت در دسترس بودن",
    name: "available",
    required: true,
    options: [
      { label: "فعال", value: true },
      { label: "غیر فعال", value: false },
    ],
  },
  {
    component: "text",
    label: "حق ویزیت",
    name: "fees",
    required: true,
    validation: {
      required: "حق ویزیت ضروری است",
      pattern: { value: /^[0-9]+$/, message: "فقط عدد وارد کنید" },
    },
  },
];
