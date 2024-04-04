import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = () => setCount((c) => c + 1);
  useEffect(function myEffect() {
    console.log("myEffect was called!");
  }, [count]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <p>Name: {name} </p>
      <input value={name} onChange={handleChange} type="text" />
    </>
  );
}

export default Counter;
