import { useRouteError, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import PageTemplate from '../templates/PageTemplate';
import MainContent from '../layout/MainContent';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let message = 'Something went wrong.';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = 'The page you are looking for could not be found.';
  }

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <PageTemplate
      mainContent={
        <MainContent className={styles.errorPage}>
          <h1>Oops!</h1>
          <p>{message}</p>
          <button type="button" onClick={goBackHandler}>
            <IoArrowBackOutline size={18} />
            Go Back
          </button>
        </MainContent>
      }
    />
  );
}

export default ErrorPage;
