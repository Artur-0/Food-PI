import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../Redux/Actions/action";
import Nav from "../NavBar";

function Create() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [healthScore, setHealthScore] = useState("");
  const [instructions, setInstructions] = useState("");
  const [diet, setDiet] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (title && summary && healthScore && instructions && diet && !error) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, summary, healthScore, instructions, diet, error]);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const validateTitle = (value) => {
    if (!/^[A-Za-z\s]*$/.test(value)) {
      setError("only letters");
    } else {
      setError("");
    }
    setTitle(value);
  };

  const validateHs = (value) => {
    if (value > 10) {
      setError("Score must be between 1 to 10");
    } else {
      setError("");
    }
    setHealthScore(value);
  };

  const selectDiet = (value) => {
    setDiet(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipe(title, summary, healthScore, instructions, diet));
    alert("Recipe created");
  };

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => validateTitle(e.target.value)}
        />
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
        <label>Summary:</label>
        <input
          type="text"
          placeholder="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <label>Health Score:</label>
        <input
          type="number"
          placeholder="health score"
          onChange={(e) => validateHs(e.target.value)}
        />
        <label>Instructions:</label>
        <input
          type="text"
          placeholder="instructions"
          onChange={(e) => setInstructions(e.target.value)}
        />
        <label>Diet:</label>
        <select onChange={(e) => selectDiet(e.target.value)}>
          <option>Select diet:</option>
          <optgroup>
            {diets.map((e) => {
              return (
                <option value={e.name} key={e.id}>
                  {e.name}
                </option>
              );
            })}
          </optgroup>
        </select>
        <input
          type="submit"
          value="Create"
          disabled={disabled}
          onSubmit={() =>
            handleSubmit(title, summary, healthScore, instructions, diet)
          }
        />
      </form>
    </>
  );
}

export default Create;

// [ ] Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Resumen del plato
// Nivel de "comida saludable" (health score)
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [ ] Botón/Opción para crear una nueva receta
// Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre de la receta no pueda contener símbolos, que el health score no pueda exceder determinado valor, etc.
