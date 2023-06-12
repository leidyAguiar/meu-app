import BotaoVoltarInicio from "../BotaoVoltarInicio";
import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
  const listItems = people.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.accomplishment}
      </p>
    </li>
  ));
  return (
    <>
      <BotaoVoltarInicio />
      <ul>{listItems}</ul>
    </>
  );
}
