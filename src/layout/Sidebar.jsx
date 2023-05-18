import PropTypes from 'prop-types';
import styles from './Sidebar.module.scss';

function Sidebar({ children, className = '' }) {
  return <aside className={`${styles.sidebar} ${className}`}>{children}</aside>;
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
};

export default Sidebar;
