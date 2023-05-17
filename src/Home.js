import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <br />
      <nav>
        <ul>
          <h3>Atividade 01 (08 – React – Aula 02)</h3>
          <li><Link to="/relogio">Data e Hora</Link></li>
          <li><Link to="/letreiro">Letreiro (Venha estudar na Fatec)</Link></li>
        </ul>
        <ul>
          <h3>Atividade 02 (09 – React – Aula 03)</h3>
          <li><Link to="/contador">Contador de Pessoas</Link></li>
        </ul>
        <ul>
          <h3>Atividade 03 (10 – React – Aula 04)</h3>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/todoList">TodoList</Link></li>
        </ul>

        <ul>
          <h3>Atividade 04 (11 – React Aula 05)</h3>
          <li><Link to="/toolbar">Toolbar</Link></li>
          <li><Link to="/galleryaula5">Gallery</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/movingDot">MovingDot</Link></li>
          <li><Link to="/form2">Form2</Link></li>
          <li><Link to="/form3">Form3</Link></li>
          <li><Link to="/list1">List1</Link></li>
          <li><Link to="/list2">List2</Link></li>
          <li><Link to="/shapeEditor">ShapeEditor</Link></li>
          <li><Link to="/counterList">CounterList</Link></li>
          <li><Link to="/list3">List3</Link></li>
          <li><Link to="/list4">List4</Link></li>
          <li><Link to="/bucketList">BucketList</Link></li>
        </ul>

        <ul>
          <h3>Atividade 05 (12 – React – Aula 06)</h3>
          <li><Link to="/formQuiz">FormQuiz</Link></li>
          <li><Link to="/formTicket">FormTicket</Link></li>
          <li><Link to="/accordion">Accordion</Link></li>
          <li><Link to="/contactList">ContactList e Chat</Link></li>
        </ul>

        <ul>
          <h3>Atividade 05</h3>
          <li><Link to="/calculadora">Calculadora</Link></li>
        </ul>

        <ul>
          <h3>Atividade 06</h3>
          <li><Link to="/jogo-da-memória">Jogo da memória</Link></li>
        </ul>

      </nav>
    </div>
  );
};
export default Home;
