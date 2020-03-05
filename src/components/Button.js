import React from 'react';
import Proptypes from 'prop-types';
import '../Button.css';

const button = ({name, color, wide}) => {
  return (
    <button type="button" className="Button" style={{ background: color, width: wide === true ? '50%' : '25%' }}>{name}</button>
  );
};

button.defaultProps = {
  name: '',
  color: '#FA9F42',
  wide: false,
};

button.propTypes = {
  name: Proptypes.string,
  color: Proptypes.string,
  wide: Proptypes.bool,
};


export default button;
