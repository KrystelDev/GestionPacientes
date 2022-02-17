//rafce

const Form = () => {
  return (
    <div className="divForm">
      <h2>Formulario</h2>
      <p>
        Añade pacientes y <span>administralos</span>.
      </p>
      <form>
        <label htmlFor="name">{"Nombre".toUpperCase()}</label>
        <input id="name" type="text" placeholder="Ej. Sheila" />
        <label htmlFor="subname">{"Apellidos".toUpperCase()}</label>
        <input id="subname" type="tex" t placeholder="Ej. Gracía Clot" />
        <label htmlFor="tel">{"Teléfono".toUpperCase()}</label>
        <input id="tel" type="tel" placeholder="Ej. 666555444" />
        <label htmlFor="date">{"Fecha de alta".toUpperCase()}</label>
        <input id="date" type="date" />
        <label htmlFor="mess" type="text">
          {"Síntomas".toUpperCase()}
        </label>
        <textarea
          id="mess"
          type="text"
          rows="4"
          cols="30"
          placeholder="Ej. Dolor adominal con nauseas"
        />
        <button type="button">Guardar</button>
      </form>
    </div>
  );
};

export default Form;
