import React from 'react';
import Proptypes from 'prop-types';
import '../Button.css';

const button = ({
  name, color, wide, clickHandler,
}) => {
  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }
  return (
    <button
      type="button"
      className="Button"
      style={{ background: color, width: wide === true ? '50%' : '25%' }}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};
button.defaultProps = {
  name: '',
  color: '#FA9F42',
  wide: false,
  clickHandler: null,
};

button.propTypes = {
  name: Proptypes.string,
  color: Proptypes.string,
  wide: Proptypes.bool,
  clickHandler: Proptypes.func,
};


export default button;
