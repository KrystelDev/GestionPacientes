//rafce

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [telf, setTelf] = useState("");
  const [date, setDate] = useState("");
  const [mess, setMess] = useState("");
  const [warning, setWarning] = useState(false);
  const messWarning = (
    <div className="warning">Todos los datos son obligatorios</div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, surName, telf, date, mess].includes("")) {
      setWarning(true);
      console.log("Todos los datos son obligatorios");
      return;
    } else {
      setWarning(false);
    }
  };

  return (
    <div className="divForm">
      <h2>Formulario</h2>
      <p>
        Añade pacientes y <span>administralos</span>.
      </p>
      <form onSubmit={handleSubmit}>
        {warning && messWarning}
        <label htmlFor="name">{"Nombre".toUpperCase()}</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Ej. Sheila"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="subname">{"Apellidos".toUpperCase()}</label>
        <input
          id="subname"
          type="tex"
          value={surName}
          placeholder="Ej. Gracía Clot"
          onChange={(e) => setSurName(e.target.value)}
        />
        <label htmlFor="tel">{"Teléfono".toUpperCase()}</label>
        <input
          id="tel"
          type="tel"
          value={telf}
          placeholder="Ej. 666555444"
          onChange={(e) => setTelf(e.target.value)}
        />
        <label htmlFor="date">{"Fecha de alta".toUpperCase()}</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="mess" type="text">
          {"Síntomas".toUpperCase()}
        </label>
        <textarea
          id="mess"
          type="text"
          value={mess}
          onChange={(e) => setMess(e.target.value)}
          rows="4"
          cols="30"
          placeholder="Ej. Dolor adominal con nauseas"
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Form;
