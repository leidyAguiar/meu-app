import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Relogio from "./components/atividade01/Relogio";
import Letreiro from "./components/atividade01/Letreiro";
import AppContador from "./components/atividade02/AppContador";
import App from "./components/atividade03/App";
import List from "./components/atividade03/List";
import Toolbar from "./components/atividade04/Toolbar";
import Gallery from "./components/atividade04/Gallery";
import Counter from "./components/atividade04/Counter";
import Form from "./components/atividade04/Form";
import Form2 from "./components/atividade04/Form2";
import Form3 from "./components/atividade04/Form3";
import List1 from "./components/atividade04/List1";
import List2 from "./components/atividade04/List2";
import List3 from "./components/atividade04/List3";
import List4 from "./components/atividade04/List4";
import BucketList from "./components/atividade04/BucketList";
import ShapeEditor from "./components/atividade04/ShapeEditor";
import CounterList from "./components/atividade04/CounterList";
import MovingDot from "./components/atividade04/MovingDot";
import FormQuiz from "./components/atividade05/FormQuiz";
import FormTicket from "./components/atividade05/FormTicket";
import Accordion from "./components/atividade05/Accordion";
import Messenger from "./components/atividade05/App";
import JogoMemoria from "./components/atividade07/JogoMemoria";
import Calculadora from "./components/atividade06/Calculadora";

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
        
        <Route path="/formQuiz" element={<FormQuiz />} />
        <Route path="/formTicket" element={<FormTicket />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/contactList" element={<Messenger />} />

        <Route path="/calculadora" element={<Calculadora />} />

        <Route path="/jogo-da-memória" element={<JogoMemoria />} />

      </Routes>
    </BrowserRouter>
  );
}
