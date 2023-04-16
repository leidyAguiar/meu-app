import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h1>{time}</h1>
      <Link to={"/"}>Voltar</Link>
    </>
  );
}
export default Relogio;
