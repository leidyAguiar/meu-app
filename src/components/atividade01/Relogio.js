import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Relogio() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Link to="/">Retornar a página inicial</Link>
      <h1>{time}</h1>
    </>
  );

}
export default Relogio;

