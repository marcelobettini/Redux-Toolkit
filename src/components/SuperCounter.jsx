import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incremented,
  incrementByStep,
  decremented,
  reset,
  incrementAsync,
} from "../features/counter/counterSlice";

const SuperCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementStep, setIncrementStep] = useState(2);
  return (
    <>
      <p>count is: {count}</p>
      <button
        onClick={() => dispatch(incremented())}
        aria-label="Increment value"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decremented())}
        aria-label="Decrement value"
      >
        Decrement
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        aria-label="Increment step value"
        value={incrementStep}
        onChange={(e) => setIncrementStep(+e.target.value)}
      />
      <button
        onClick={() => dispatch(incrementByStep(incrementStep || 0))}
        aria-label="Increment by step"
      >
        Add by Step
      </button>
      <button
        onClick={() => dispatch(incrementAsync(incrementStep || 0))}
        aria-label="Async increment by step"
        className="asyncButton"
      >
        Async Add by Step
      </button>
    </>
  );
};

export default SuperCounter;
