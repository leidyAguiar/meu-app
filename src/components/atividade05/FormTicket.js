import React, { useState } from "react";
import BotaoVoltarInicio from "../BotaoVoltarInicio";

export default function FormTicket() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
    <BotaoVoltarInicio /> <br />
      <h2>Let's check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
