import React from "react";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({ type: "increment" });
  };
  const subBtn = () => {
    dispatch({ type: "decrement" });
  };

  const incby25 = () => {
    dispatch({ type: "incby25", payload: 25 });
  };
  return (
    <div>
      <button onClick={addBtn}>Increament</button>
      <button onClick={incby25}>incby25</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  );
};

export default Home;
