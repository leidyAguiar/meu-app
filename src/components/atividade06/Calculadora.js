import React, { useState, useEffect } from "react";
import BotaoVoltarInicio from "../BotaoVoltarInicio";
import Display from "./Display";
import Botao from "./Botao";
import "./calculadora.css";

export default function Calculadora() {
  const [display, setDisplay] = useState("0");
  const [valores, setValores] = useState([]);

  useEffect(() => {
    valores.length > 0 && setDisplay(valores.join(" "));
    console.log(valores);
  }, [valores]);

  function isOperador(valor) {
    return (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "%"
    );
  }
  function armazenarValor(valor) {
    if (valor === ",") {
      valor = ".";
    }
    if (
      (valor === "0" && display === "0") ||
      (isOperador(valor) && isOperador(valores[valores.length - 1])) ||
      (isOperador(valor) && valores.length === 0)
    ) {
      return;
    }

    if (valor === "%") {
      const aux = [];
      let novoValor = [];
      let remover = 0;
      let operador = false;
      for (let i = valores.length - 1; i >= 0; i--) {
        if (!isOperador(valores[i])) {
          aux.unshift(valores[i]);
          remover = !operador ? remover + 1 : remover;
        } else if (!operador) {
          operador = true;
          aux.unshift("*");
        } else break;
      }
      aux.push(valor);
      novoValor = valores.slice(0, valores.length - remover);
      let auxResultado = eval(aux.join("").replace(/%/g, "*0.01"));
      novoValor = [...novoValor, ...auxResultado.toString().split("")];
      setValores(novoValor);
    } else setValores([...valores, valor]);
  }

  function limpar(tudo) {
    if (tudo === "AC") {
      setDisplay("0");
      setValores([]);
    } else if (valores.length > 0) {
      setValores(valores.slice(0, valores.length - 1));
    } else {
      setDisplay("0");
      setValores([]);
    }
  }

  function igual() {
    if (valores.length === 0) {
      return;
    }
    if (isOperador(valores[valores.length - 1])) {
      return;
    }
    const resultado = eval(valores.join(""));
    setValores([...resultado.toString().split("")]);
  }
  return (
    <>
      <BotaoVoltarInicio /> <br />
      <h1 className="text-center">Calculadora</h1>
      <div className="container-geral">
        <div className="container-calculadora">
          <div className="display-calculadora">
            <Display valor={display} />
          </div>

          <div className="botoes-calculadora">
            <Botao valor="AC" funcao={limpar} className={`botao-cinza`} />
            <Botao valor="C" funcao={limpar} className={`botao-cinza`} />
            <Botao
              valor="%"
              funcao={armazenarValor}
              className={`botao-cinza`}
            />
            <Botao
              valor="/"
              funcao={armazenarValor}
              className={`botao-operacao`}
            />
          </div>
          <div className="botoes-calculadora">
            <Botao valor="7" funcao={armazenarValor} />
            <Botao valor="8" funcao={armazenarValor} />
            <Botao valor="9" funcao={armazenarValor} />
            <Botao
              valor="*"
              funcao={armazenarValor}
              className={`botao-operacao`}
            />
          </div>
          <div className="botoes-calculadora">
            <Botao valor="4" funcao={armazenarValor} />
            <Botao valor="5" funcao={armazenarValor} />
            <Botao valor="6" funcao={armazenarValor} />
            <Botao
              valor="-"
              funcao={armazenarValor}
              className={`botao-operacao`}
            />
          </div>
          <div className="botoes-calculadora">
            <Botao valor="1" funcao={armazenarValor} />
            <Botao valor="2" funcao={armazenarValor} />
            <Botao valor="3" funcao={armazenarValor} />
            <Botao
              valor="+"
              funcao={armazenarValor}
              className={`botao-operacao`}
            />
          </div>
          <div className="botoes-calculadora">
            <Botao valor="0" funcao={armazenarValor} className={`botao-zero`} />
            <Botao
              valor=","
              funcao={armazenarValor}
              className={`botao-operacao`}
            />
            <Botao valor="=" funcao={igual} className={`botao-operacao`} />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
