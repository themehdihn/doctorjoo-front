import { ArrowCircleLeft, ArrowCircleLeft2, ArrowLeft, MessageQuestion } from "iconsax-reactjs";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__wrapper">
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            رزرو نوبت هوشمند با{" "}
            <span className="hero-section__highlight">دکترجو</span>
          </h1>
          <p className="hero-section__description">
            با دکتر جو میتونید لیست دکترای محبوب و تخصص های مورد نیاز بیماران رو
            مشاهده کنید و سپس به آسانی هرچه تمام تر با دکتر مد نظر خودتون نوبت
            رزرو کنید :)
          </p>
          <div className="hero-section__separator"></div>
          {/* Separator */}

          <div className="hero-section__cta-wrapper">
            <a href="#" className="hero-section__cta">
              رزرو نوبت
              <ArrowLeft size={18}/>
            </a>
          </div>
        </div>
        {/* Content */}
        <div className="hero-section__image">
          <div className="hero-section__image-wrapper">
            <img
              src="../../public/hero.png"
              alt="Hero"
              className="hero-section__image-img"
            />
          </div>
          {/* Image Wrapper */}
          <div className="hero-section__image-bg"></div>
        </div>
        {/* Image */}
      </div>
      {/* Wrapper */}
    </section>
  );
}

export default HeroSection;
