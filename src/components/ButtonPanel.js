import React from 'react';
import Button from './Button';
import '../ButtonPanel.css';

const buttonPanel = () => (
  <div className="ButtonPanel">
    <div className="group group-1">
      <Button name="AC" color="#E0E0E2" />
      <Button name="+/-" color="#E0E0E2" />
      <Button name="%" color="#E0E0E2" />
      <Button name="÷" />
    </div>
    <div className="group group-2">
      <Button name="7" color="#E0E0E2" />
      <Button name="8" color="#E0E0E2" />
      <Button name="9" color="#E0E0E2" />
      <Button name="X" />
    </div>
    <div className="group group-3">
      <Button name="4" color="#E0E0E2" />
      <Button name="5" color="#E0E0E2" />
      <Button name="6" color="#E0E0E2" />
      <Button name="-" />
    </div>
    <div className="group group-4">
      <Button name="1" color="#E0E0E2" />
      <Button name="2" color="#E0E0E2" />
      <Button name="3" color="#E0E0E2" />
      <Button name="+" />
    </div>
    <div className="group group-5">
      <Button name="0" wide color="#E0E0E2" />
      <Button name="." color="#E0E0E2" />
      <Button name="=" />
    </div>
  </div>
);


export default buttonPanel;
