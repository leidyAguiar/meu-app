import React, { useState } from "react";
import { Link } from "react-router-dom";
import minions from "./imagens/minions.gif";

function embaralhar(animes) {
  let indiceAtual = animes.length,
    valorTemporario,
    indiceAleatorio;
  while (0 !== indiceAtual) {
    indiceAleatorio = Math.floor(Math.random() * indiceAtual);
    indiceAtual -= 1;
    valorTemporario = animes[indiceAtual];
    animes[indiceAtual] = animes[indiceAleatorio];
    animes[indiceAleatorio] = valorTemporario;
  }
  return animes;
}

function Card({ anime, funcao }) {
  return (
    <div className="col-2 d-flex justify-content-center">
      <button
        className="card"
        onClick={() => funcao(anime)}
        style={{
          width: "100px",
          height: "100px",
          fontSize: "24px",
          color: "black",
          backgroundColor: anime.acertou
            ? "#a6d3a6"
            : anime.virado
            ? "blue"
            : "#eb83f3",
          border: "1px solid black",
          margin: "10px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {anime.virado ? anime.img : "❀"}
      </button>
    </div>
  );
}
const ArrayAnimes = [
  { id: 0, nome: "rosa", img: "🌹", acertou: false, virado: false },
  { id: 1, nome: "rosa", img: "🌹", acertou: false, virado: false },
  { id: 2, nome: "florescencia", img: "🌼", acertou: false, virado: false },
  { id: 3, nome: "florescencia", img: "🌼", acertou: false, virado: false },
  { id: 4, nome: "rosette", img: "🏵️", acertou: false, virado: false },
  { id: 5, nome: "rosette", img: "🏵️", acertou: false, virado: false },
  { id: 6, nome: "rosaMurcha", img: "🥀", acertou: false, virado: false },
  { id: 7, nome: "rosaMurcha", img: "🥀", acertou: false, virado: false },
  { id: 8, nome: "tulipa", img: "🌷", acertou: false, virado: false },
  { id: 9, nome: "tulipa", img: "🌷", acertou: false, virado: false },
  { id: 10, nome: "trevo", img: "🍀", acertou: false, virado: false },
  { id: 11, nome: "trevo", img: "🍀", acertou: false, virado: false },
];
export default function JogoMemoria() {
  const [acertos, setAcertos] = useState(0);
  const [animes, setAnimes] = useState(embaralhar(ArrayAnimes));
  const [anterior, setAnterior] = useState(null);

  function handleClick(anime) {
    if (!anime.virado) {
      setAnimes(
        animes.map((cadaAnime) => {
          if (cadaAnime.id === anime.id) {
            cadaAnime.virado = !cadaAnime.virado;
          }
          return cadaAnime;
        })
      );
      setAnterior(anime);

      if (anterior) {
        if (anterior.nome === anime.nome && anterior.id !== anime.id) {
          setAcertos(acertos + 1);
          setAnimes(
            animes.map((cadaAnime) => {
              if (cadaAnime.nome === anime.nome) {
                cadaAnime.acertou = true;
              }
              return cadaAnime;
            })
          );
        } else {
          setTimeout(() => {
            setAnimes(
              animes.map((cadaAnime) => {
                if (cadaAnime.id === anime.id || cadaAnime.id === anterior.id) {
                  cadaAnime.virado = false;
                }
                return cadaAnime;
              })
            );
          }, 1000);
        }
        setAnterior(null);
      }
    }
  }

  return (
    <>
      <Link to="/">Retornar a página inicial</Link> <br />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Jogo da Memória</h1>
          </div>
          <div className="col-12 text-center">
            {acertos === 6 && (
              <img src={minions} style={{ width: "500px" }} alt="" />
            )}
          </div>
        </div>
        <div className="row">
          {animes.map((anime) => (
            <Card anime={anime} funcao={handleClick} />
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h1>Acertos: {acertos}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
