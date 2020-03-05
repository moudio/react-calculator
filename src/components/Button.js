import React from 'react';
import Proptypes from 'prop-types';

const button = props => {
  const { name } = props;
  return (
    <button type="button">{name}</button>
  );
};

button.defaultProps = {
  name: '',
};

button.propTypes = {
  name: Proptypes.string,
};

export default button;
