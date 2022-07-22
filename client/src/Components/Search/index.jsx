import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearToSearch, getRecipeByName } from "../../Redux/Actions/action";

function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(getRecipeByName(name));
    dispatch(clearToSearch());
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            name="name"
            placeholder="recipe"
            onChange={handleChange}
          />
          <button onClick={handleOnClick}>Search</button>
        </label>
      </form>
    </div>
  );
}

export default Search;
