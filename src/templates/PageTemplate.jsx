import PropTypes from 'prop-types';

function PageTemplate({ sidebar, mainContent }) {
  return (
    <div>
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
