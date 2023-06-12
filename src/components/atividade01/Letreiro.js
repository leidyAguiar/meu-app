import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Letreiro = () => {
  const [texto, setTexto] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < "Venha estudar na Fatec".length) {
      setTimeout(() => {
        setTexto((texto) => texto + "Venha estudar na Fatec"[index]);
        setIndex((index) => index + 1);
      }, 100);
    }
  }, [index]);

  return (
    <>
      <Link to="/">Retornar a página inicial</Link>
      <div className="container text-center">
        <h1>Letreiro</h1>
        <h1>{texto}</h1>
      </div>
    </>
  );
};
export default Letreiro;
