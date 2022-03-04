import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";
import { useState } from "react";

function App() {
  // List saved patients:
  const [patients, setPatients] = useState([]);
  // Patient in input:
  const [patient, setPatient] = useState({});

  // Delete seleted patient
  function deletePatient(idPatients) {
    let copyPatients = [...patients];
    copyPatients.splice(idPatients, 1);
    setPatients(copyPatients);
  }

  return (
    <div>
      <Header />
      <main className="container">
        <Form patients={patients} setPatients={setPatients} patient={patient} />
        <ListPatients
          patients={patients}
          deletePatient={deletePatient}
          setPatient={setPatient}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
