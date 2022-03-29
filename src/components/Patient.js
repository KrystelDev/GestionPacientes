const Patient = ({ element, index, deletePatient, setPatient }) => {
  //Destructuring de objectos
  const { name, surName, telf, date, mess } = element;
  element.index = index;

  return (
    <form>
      <p htmlFor="name">
        Nombre:
        <span id="name">{name}</span>
      </p>

      <p htmlFor="subname">
        Apellidos:
        <span id="subname">{surName}</span>
      </p>

      <p htmlFor="tel">
        Teléfono:
        <span id="tel">{telf}</span>
      </p>

      <p htmlFor="date">
        Fecha de alta:
        <span id="date">{date}</span>
      </p>

      <p className="mess" htmlFor="mess">
        Síntomas:
        <span id="mess" type="text" rows="4" cols="30">
          {mess}
        </span>
      </p>

      <section>
        <button type="button" onClick={() => setPatient(element)}>
          Editar
        </button>
        <button type="button" onClick={() => deletePatient(index)}>
          Eliminar
        </button>
      </section>
    </form>
  );
};

export default Patient;
