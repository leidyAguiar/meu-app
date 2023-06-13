import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <br />
      <nav>
        <h3>Atividade 01 (08 – React – Aula 02)</h3>
        <ul className="row list-unstyled">
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/relogio" >Data e Hora</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/letreiro" >Letreiro (Venha estudar na Fatec)</Link></li>
        </ul>
        <ul className="row list-unstyled">
          <h3>Atividade 02 (09 – React – Aula 03)</h3>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/contador">Contador de Pessoas</Link></li>
        </ul>
        <ul className="row list-unstyled">
          <h3>Atividade 03 (10 – React – Aula 04)</h3>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/gallery">Gallery</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/todoList">TodoList</Link></li>
        </ul>

        <ul className="row list-unstyled">
          <h3>Atividade 04 (11 – React Aula 05)</h3>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/toolbar">Toolbar</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/galleryaula5">Gallery</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/counter">Counter</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/form">Form</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/movingDot">MovingDot</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/form2">Form2</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/form3">Form3</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/list1">List1</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/list2">List2</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/shapeEditor">ShapeEditor</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/counterList">CounterList</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/list3">List3</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/list4">List4</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/bucketList">BucketList</Link></li>
        </ul>

        <ul className="row list-unstyled">
          <h3>Atividade 05 (12 – React – Aula 06)</h3>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/formQuiz">FormQuiz</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/formTicket">FormTicket</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/accordion">Accordion</Link></li>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/contactList">ContactList e Chat</Link></li>
        </ul>

        <ul className="row list-unstyled">
          <h3>Atividade 06</h3>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/calculadora">Calculadora</Link></li>
        </ul>

        <ul className="row list-unstyled">
          <h3>Atividade 07</h3>
          <li className="col-6"><Link className="btn btn-secondary m-1" to="/jogo-da-memória">Jogo da memória</Link></li>
        </ul>
      </nav>
    </div>
  );
};
export default Home;