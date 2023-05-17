import { Link } from "react-router-dom";
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
      <Link to="/">Retornar a página inicial</Link>
      <ul>{listItems}</ul>
    </>
  );
}
