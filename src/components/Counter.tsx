import { useState, memo, useCallback, useMemo } from "react";

type ChildProps = {
  onChange: () => void;
};

// const Child = () => {
//   console.log("=> child rendered");
//   return <div>Child</div>;
// };

// const Child = ({ onChange }: ChildProps) => {
//   console.log("=> child rendered");
//   return <div>Child</div>;
// };

// const Child = memo(() => {
//   console.log("=> child rendered");
//   return <div>Child</div>;
// });

const Child = memo(({ onChange }: ChildProps) => {
  console.log("=> child rendered");
  return <div>Child</div>;
});

const fibo = (n: number): number => {
  return n <= 0 ? 0 : n === 1 ? 1 : fibo(n - 1) + fibo(n - 2);
};

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const count2Callback = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  // const f = fibo(count1);
  const f = useMemo(() => {
    return fibo(count1);
  }, [count1]);

  return (
    <div>
      Fibo = {f}
      <br />
      Count 1 = {count1}
      <br />
      {/* <Child /> */}
      {/* <Child onChange={() => setCount1(count1 + 1)} /> */}
      {/* <Child onChange={count2Callback} /> */}
      <br />
      <button onClick={() => setCount1(count1 + 1)}>Add count 1</button>
      <hr />
      <br />
      Count 2 = {count2}
      <br />
      <button onClick={() => setCount2(count2 + 1)}>Add count 2</button>
    </div>
  );
}

export default Counter;
