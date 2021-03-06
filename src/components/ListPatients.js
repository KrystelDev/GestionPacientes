import Patient from "./Patient";

const listPatients = ({
  patients,
  deletePatient,
  setPatient,
  setSavedEdit,
}) => {
  return (
    <div className="divListPacient">
      <h2>Listado de Pacientes:</h2>
      <p>
        Dar de Baja, edita o gestiona <span>pacientes</span>.
      </p>
      <div>
        {patients.map((element, index) => (
          <Patient
            key={index}
            element={element}
            index={index}
            deletePatient={deletePatient}
            setPatient={setPatient}
            setSavedEdit={setSavedEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default listPatients;
