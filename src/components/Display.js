import React from 'react';
import Proptypes from 'prop-types';

const display = props => {
  const { result } = props;
  return (
    <div>
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
