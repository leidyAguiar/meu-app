import { Link } from "react-router-dom";

function Button({ onClick, children }) {
  return (
    <button onClick={(e) => {
        e.stopPropagation();
        onClick();
      }} className="btn btn-secondary mx-2">
      {children}
    </button>
  );
}

function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submittting!');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}

export default function Toolbar() {
    return (
      <>
        <Link to="/">Retornar a página inicial</Link>
        <div className="container text-center">
        <h1>Toolbar</h1>
        <div className="Toolbar" onClick={() => {
            alert("You clicked the toolbar");
          }}>
          <Button  onClick={() => alert("Playing!")}>
              Play Movie
          </Button>
          <Button onClick={() => alert("Uploading!")}>
              Upload image
          </Button>
        </div>
        </div>
      </>
    );
  }
