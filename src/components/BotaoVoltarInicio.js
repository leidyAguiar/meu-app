import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export default function BotaoVoltarInicio() {
    return (<Link className="align-items-center btn btn-secondary d-flex gap-1 justify-content-center" style={{width: "300px"}} to="/"> <TiArrowBack  />Retornar a página inicial</Link>)
}