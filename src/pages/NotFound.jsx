import { useNavigate } from 'react-router-dom';
import useMoveBack from '../hooks/useMoveBack';
import { ArrowRight, EmojiSad, Home } from 'iconsax-reactjs';
import '../styles/not-found.css';

function NotFound() {
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__content">
          <EmojiSad className="not-found__icon" />
          <p className="not-found__title">اوپس! 😬</p>
          <p className="not-found__message">اینجا خبری نیست ...</p>
          <div className="not-found__buttons">
            <button
              onClick={moveBack}
              className="not-found__button not-found__button--back"
            >
              <ArrowRight className="not-found__button-icon" />
              <span>برگشت</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="not-found__button not-found__button--home"
            >
              <span>خانه</span>
              <Home className="not-found__button-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;