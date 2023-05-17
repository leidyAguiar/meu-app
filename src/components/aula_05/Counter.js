import { useState } from "react";
import { Link } from "react-router-dom";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Link to="/">Retornar a página inicial</Link> <br />
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        Increment Number
      </button>
    </>
  );
}
