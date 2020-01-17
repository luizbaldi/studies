import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title }) => (
  <div style={{ color: 'black' }}>
    <h1>Hello {title}!</h1>
  </div>
);

FullHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FullHeader;
