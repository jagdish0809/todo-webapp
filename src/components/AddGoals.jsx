import React, { useState } from "react";
import "./AddGoals.css";

export default function AddGoals(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalChangeHandler = (e) => {
    setEnteredGoal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const goal = enteredGoal
    setEnteredGoal('')
    // props.onSaveGoalData(goal)
    console.log(goal)
  };

  return (
    <form onSubmit={submitHandler} className="add-goals">
      <label className="add-goals__title">Course Goal</label>
      <input
        type="text"
        className="add-goals__input"
        value={enteredGoal}
        onChange={goalChangeHandler}
      />
      <button type="submit" className="add-goals__buttons">
        Add Goal
      </button>
    </form>
  );
}
