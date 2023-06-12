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
      <div className="container">
        <h1 className="text-center">Relogio</h1>
        <h1 className="text-center">{time}</h1>
      </div>
    </>
  );
}
export default Relogio;
