import { useState } from "react";
import { sculptureList } from "./data.js";
import BotaoVoltarInicio from "../BotaoVoltarInicio";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index < sculptureList.length - 1 ? index + 1 : 0);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <BotaoVoltarInicio /> <br />
      <button className="btn btn-secondary" onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button className="btn btn-secondary" onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

// function useTime() {
//     const [time, setTime] = useState(new Date());
//     useEffect(() => {
//         const id = setInterval(() => {
//             setTime(new Date());
//         }, 1000);
//         return () => clearInterval(id);
//     }, []);
//     return time;
// }

// export default function GalleryTime() {
//     const time = useTime();
//     return (
//         <Clock time={time.toLocaleTimeString()} />
//     );
// }
