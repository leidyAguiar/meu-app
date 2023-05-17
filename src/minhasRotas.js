import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv03 from "./Atv03";
import Relogio from "./components/aula_02/Relogio";
import Letreiro from "./components/aula_02/Letreiro";
import AppContador from "./components/aula_03/AppContador";
import App from "./components/aula_04/App";
import List from "./components/aula_04/List";
import Toolbar from "./components/aula_05/Toolbar";
import Gallery from "./components/aula_05/Gallery";
import Counter from "./components/aula_05/Counter";
import Form from "./components/aula_05/Form";
import Form2 from "./components/aula_05/Form2";
import Form3 from "./components/aula_05/Form3";
import List1 from "./components/aula_05/List1";
import List2 from "./components/aula_05/List2";
import List3 from "./components/aula_05/List3";
import List4 from "./components/aula_05/List4";
import BucketList from "./components/aula_05/BucketList";
import ShapeEditor from "./components/aula_05/ShapeEditor";
import CounterList from "./components/aula_05/CounterList";
import MovingDot from "./components/aula_05/MovingDot";

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relogio" element={<Relogio />} />
        <Route path="/letreiro" element={<Letreiro />} />

        <Route path="/contador" element={<AppContador />} />

        <Route path="/gallery" element={<App />} />
        <Route path="/todoList" element={<List />} />

        <Route path="/toolbar" element={<Toolbar />} />
        <Route path="/galleryaula5" element={<Gallery />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/movingDot" element={<MovingDot />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/list1" element={<List1 />} />
        <Route path="/list2" element={<List2 />} />
        <Route path="/shapeEditor" element={<ShapeEditor />} />
        <Route path="/counterList" element={<CounterList />} />
        <Route path="/list3" element={<List3 />} />
        <Route path="/list4" element={<List4 />} />
        <Route path="/bucketList" element={<BucketList />} />
        
        <Route path="/formQuiz" element={<Atv03 />} />
        <Route path="/formTicket" element={<Atv03 />} />
        <Route path="/accordion" element={<Atv03 />} />
        <Route path="/contactList" element={<Atv03 />} />

        <Route path="/calculadora" element={<Atv03 />} />

        <Route path="/jogo-da-memória" element={<Atv03 />} />
      </Routes>
    </BrowserRouter>
  );
}
