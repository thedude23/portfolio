import PropTypes from 'prop-types';
import styles from './MainContent.module.scss';

function MainContent({ children, className = '' }) {
  return <main className={`${styles.mainContent} ${className}`}>{children}</main>;
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MainContent.defaultProps = {
  className: '',
};

export default MainContent;
