import Pacient from "./Pacient";

const listPatients = ({ patients, deletePatient }) => {
  return (
    <div className="divListPacient">
      <h2>Listado de Pacientes:</h2>
      <p>
        Dar de Baja, edita o gestiona <span>pacientes</span>.
      </p>
      <div>
        {patients.map((element, index) => (
          <Pacient
            key={index}
            element={element}
            index={index}
            deletePatient={deletePatient}
          />
        ))}
      </div>
    </div>
  );
};

export default listPatients;
