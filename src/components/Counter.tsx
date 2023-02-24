import { useState, useEffect, useCallback, useMemo } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // console.log("=> count", count);
  // console.log("=> memoizedValue", memoizedValue);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>The memoized value is {memoizedValue}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
