import React from "react";
import "./../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../reducer/actions";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default App;
