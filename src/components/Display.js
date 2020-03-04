import React from 'react';
import Proptypes from 'prop-types';
import '../Display.css'

const display = props => {
  const { result } = props;
  return (
    <div className="Display">
      {result}
    </div>
  );
};

display.defaultProps = {
  result: 0,
};

display.propTypes = {
  result: Proptypes.string,
};
export default display;
