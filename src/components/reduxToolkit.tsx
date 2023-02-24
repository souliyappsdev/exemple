import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reduxToolkit/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/reduxToolkit/counterSlice";

function reduxToolkit() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(Number(prompt("Enter an amount") || 0)));
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      &nbsp; &nbsp;
      <button onClick={handleDecrement}>Decrement</button>
      &nbsp; &nbsp;
      <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
    </div>
  );
}

export default reduxToolkit;
