import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [errorMes, setErrorMsg] = useState(false)
  // errorMes = 'No Record Added!'
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setErrorMsg(true)
     
      return
    }
    props.onAddGoal(enteredValue);
    setErrorMsg();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: errorMes ? 'Red' : 'Black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
      {/* {!errorMes ? '' : 'No Record Added!'} */}
    </form>
  );
};

export default CourseInput;
