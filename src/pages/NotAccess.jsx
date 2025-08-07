import { useNavigate } from 'react-router-dom';

import { ArrowRight, Home } from 'iconsax-reactjs';
import '../styles/not-access.css'; // فایل CSS وارد می‌شود
import useMoveBack from '../hooks/useMoveBack';

function NotAccess() {
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  return (
    <div className="not-access">
      <div className="not-access__container">
        <div className="not-access__content">
          <p className="not-access__message">شما به این مسیر دسترسی ندارید...</p>
          <div className="not-access__buttons">
            <button
              onClick={moveBack}
              className="not-access__button not-access__button--back"
            >
              <ArrowRight className="not-access__icon" />
              <span>برگشت</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="not-access__button not-access__button--home"
            >
              <span>خانه</span>
              <Home className="not-access__icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotAccess;