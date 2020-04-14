import React from 'react';
import Proptypes from 'prop-types';
import Button from './Button';
import '../ButtonPanel.css';

const buttonPanel = props => {
  function handleClick(buttonName) {
    return props.clickHandler(buttonName);
  }
  return (

    <div className="ButtonPanel">
      <div className="group group-1">
        <Button name="AC" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="+/-" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="%" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="group group-2">
        <Button name="7" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="8" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="9" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div className="group group-3">
        <Button name="4" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="5" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="6" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="group group-4">
        <Button name="1" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="2" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="3" color="#E0E0E2" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="group group-5">
        <Button name="0" wide color="#E0E0E2" clickHandler={handleClick} />
        <Button name="." color="#E0E0E2" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};
buttonPanel.defaultProps = {
  clickHandler: null,
};
buttonPanel.propTypes = {
  clickHandler: Proptypes.func,

};


export default buttonPanel;
