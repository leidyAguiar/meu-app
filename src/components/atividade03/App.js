import BotaoVoltarInicio from "../BotaoVoltarInicio";
import Avatar from "./Avatar.js";

function Card({ children }) {
  return (
    <div className="card">
        {children}
    </div>
    );
}

function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

export default function Gallery() {
    return (
      <>
      <BotaoVoltarInicio />
      <section>
        <h1>Amazing scientits</h1>
        <Profile />
      </section>
      </>
    );
  }
