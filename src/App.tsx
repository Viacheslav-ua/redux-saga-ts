
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./store/todo/actions";

import { getCountSelector } from "./store/todo/selectors";

const App = () => {

  const count = useSelector(getCountSelector)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increaseCount())
  }
  const handleDecrease = () => {
    dispatch(decreaseCount())
  }

  return (
    <div className="App">
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <h1>{ count }</h1>
    </div>
  );
}

export default App;
