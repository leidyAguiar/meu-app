import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h1>{texto}</h1>
      <Link to={"/"}>Voltar</Link>
    </>
  );
};
export default Letreiro;
