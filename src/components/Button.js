import React from 'react';
import Proptypes from 'prop-types';
import '../Button.css';

const button = props => {
  const { name, color } = props;
  let { wide } = props;
  wide = wide === true ? '50%' : '25%';
  return (
    <button type="button" className="Button" style={{ background: color, width: wide }}>{name}</button>
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
