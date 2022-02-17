import Pacient from "./Pacient";

const listPatients = () => {
  return (
    <div className="divListPacient">
      <h2>Listado de Pacientes:</h2>
      <p>
        Dar de Baja, edita o gestiona <span>pacientes</span>.
      </p>
      <div>
        <Pacient />
        <Pacient />
        <Pacient />
        <Pacient />
        <Pacient />
        <Pacient />
      </div>
    </div>
  );
};

export default listPatients;
