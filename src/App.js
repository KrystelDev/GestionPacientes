import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";
import { useState } from "react";

function App() {
  // List saved patients:
  const [patients, setPatients] = useState([]);

  //
  function deletePatient(idPatients) {
    let copyPatients = [...patients];
    copyPatients.splice(idPatients, 1);
    setPatients(patients);
  }

  return (
    <div>
      <Header />
      <main className="container">
        <Form patients={patients} setPatients={setPatients} />
        <ListPatients patients={patients} deletePatient={deletePatient} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
