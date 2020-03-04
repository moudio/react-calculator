import React from 'react';
import Proptypes from 'prop-types';
import '../Button.css'

const button = props => {
  const { name, color, wide } = props;
  return (
    <button type="button" className="Button">{name}</button>
  );
};

button.defaultProps = {
  name: '',
};

button.propTypes = {
  name: Proptypes.string,
};

export default button;
