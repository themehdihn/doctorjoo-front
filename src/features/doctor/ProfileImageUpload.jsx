import React, { useRef } from "react";
import "./ProfileImageUpload.css"
function ProfileImageUpload({ value, onChange, error }) {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // اینجا می‌توانی مستقیماً فایل را به سرور بفرستی
      onChange(file);
    }
  };

  return (
    <div className="profile-upload">
      <label className="profile-upload__label">تصویر پروفایل</label>
      <div
        className="profile-upload__preview"
        onClick={() => fileInputRef.current.click()}
      >
        {value ? (
          <img
            src={typeof value === "string" ? value : URL.createObjectURL(value)}
            alt="پروفایل"
          />
        ) : (
          <span>برای انتخاب کلیک کنید</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="text-field__input"
        style={{ display: "none" }}
      />
      {error && <p className="profile-upload__error">{error}</p>}
    </div>
  );
}

export default ProfileImageUpload;
