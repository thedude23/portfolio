import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import PageTemplate from '../templates/PageTemplate';
import MainContent from '../layout/MainContent';
import styles from './ErrorPage.module.scss';
import { Helmet } from 'react-helmet';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Error page" />
      </Helmet>
      <PageTemplate
        mainContent={
          <MainContent className={styles.errorPage}>
            <h1>Oops!</h1>
            <p>Something went wrong.</p>
            <button type="button" onClick={goBackHandler}>
              <IoArrowBackOutline size={18} />
              Go Back
            </button>
          </MainContent>
        }
      />
    </>
  );
};

export default ErrorPage;
