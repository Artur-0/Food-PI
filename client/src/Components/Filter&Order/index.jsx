import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiets,
  getFilteredRecipes,
  sortRecipes,
} from "../../Redux/Actions/action";

function FilterAndOrder() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [showButtonOrder, setShowButtonOrder] = useState(false);
  const [showButtonFilter, setShowButtonFilter] = useState(false);
  const [ascDsc, setAsc_dsc] = useState(false);

  const handleSort = (by, order) => {
    dispatch(sortRecipes(by, order));
    setAsc_dsc(!ascDsc);
  };

  return (
    <>
      {showButtonOrder ? (
        <>
          <button onClick={() => setShowButtonOrder(false)}>
            Close SortBy
          </button>
          <ul>
            <li onClick={() => handleSort("name", ascDsc ? "dsc" : "asc")}>
              Name
            </li>
            <li
              onClick={() => handleSort("healthScore", ascDsc ? "asc" : "dsc")}
            >
              Health Score
            </li>
          </ul>
        </>
      ) : showButtonFilter ? (
        <>
          <button onClick={() => setShowButtonFilter(false)}>
            Close Filters
          </button>
          <ul>
            {diets.map((d) => {
              return (
                <li
                  key={d.id}
                  onClick={() => dispatch(getFilteredRecipes(d.name))}
                >
                  {d.name}
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <button
            onClick={() =>
              diets.length
                ? setShowButtonFilter(true)
                : dispatch(getDiets()) && setShowButtonFilter(true)
            }
          >
            Filters
          </button>
          <button onClick={() => setShowButtonOrder(true)}>Sort By</button>
        </>
      )}
    </>
  );
}

export default FilterAndOrder;
