import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // List saved patients:
  const [patients, setPatients] = useLocalStorage(0, []);

  // Patient in inputs:
  const [patient, setPatient] = useState("");

  // Delete seleted patient
  function deletePatient(idPatients) {
    let copyPatients = [...patients];
    copyPatients.splice(idPatients, 1);
    setPatients(copyPatients);
  }

  //Saved o Edit
  const [savedEdit, setSavedEdit] = useState("Guardar");

  return (
    <div>
      <Header />
      <main className="container">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
          savedEdit={savedEdit}
          setSavedEdit={setSavedEdit}
        />
        <ListPatients
          patients={patients}
          deletePatient={deletePatient}
          setPatient={setPatient}
          savedEdit={savedEdit}
          setSavedEdit={setSavedEdit}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
