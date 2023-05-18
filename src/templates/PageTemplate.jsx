import PropTypes from 'prop-types';
import styles from './PageTemplate.module.scss';

function PageTemplate({ sidebar, mainContent }) {
  return (
    <div className={styles.page}>
      {sidebar}
      {mainContent}
    </div>
  );
}

PageTemplate.propTypes = {
  sidebar: PropTypes.node,
  mainContent: PropTypes.node.isRequired,
};

PageTemplate.defaultProps = {
  sidebar: null,
};

export default PageTemplate;
