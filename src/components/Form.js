//rafce

import { useEffect, useState } from "react";

const Form = ({
  patients,
  setPatients,
  patient,
  setPatient,
  savedEdit,
  setSavedEdit,
}) => {
  // Attributes of each object in the List saved patients
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [telf, setTelf] = useState("");
  const [date, setDate] = useState("");
  const [mess, setMess] = useState("");

  // Warning only if necessary
  const [warning, setWarning] = useState(false);
  const messWarning = (
    <div className="warning">Todos los datos son obligatorios</div>
  );

  useEffect(() => {
    if (patient) {
      setName(patient.name);
      setSurName(patient.surName);
      setTelf(patient.telf);
      setDate(patient.date);
      setMess(patient.mess);
    }
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, surName, telf, date, mess].includes("")) {
      setWarning(true);
      console.log("Todos los datos son obligatorios");
      return;
    } else {
      setWarning(false);
      if (!patients[patient.index]) {
        setPatients([...patients, { name, surName, telf, date, mess }]);
      } else {
        patients[patient.index] = { name, surName, telf, date, mess };
        setPatients(patients);
      }
      setName("");
      setSurName("");
      setTelf("");
      setDate("");
      setMess("");
      setPatient("");
      setSavedEdit("Guardar");
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
          value={name ? name : ""}
          placeholder="Ej. Sheila"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="subname">{"Apellidos".toUpperCase()}</label>
        <input
          id="subname"
          type="tex"
          value={surName ? surName : ""}
          placeholder="Ej. Gracía Clot"
          onChange={(e) => setSurName(e.target.value)}
        />
        <label htmlFor="tel">{"Teléfono".toUpperCase()}</label>
        <input
          id="tel"
          type="tel"
          value={telf ? telf : ""}
          placeholder="Ej. 666555444"
          onChange={(e) => setTelf(e.target.value)}
        />
        <label htmlFor="date">{"Fecha de alta".toUpperCase()}</label>
        <input
          id="date"
          type="date"
          value={date ? date : ""}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="mess" type="text">
          {"Síntomas".toUpperCase()}
        </label>
        <textarea
          id="mess"
          type="text"
          value={mess ? mess : ""}
          onChange={(e) => setMess(e.target.value)}
          rows="4"
          cols="30"
          placeholder="Ej. Dolor adominal con nauseas"
        />
        <button type="submit">{savedEdit}</button>
      </form>
    </div>
  );
};

export default Form;
