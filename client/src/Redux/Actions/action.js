import axios from "axios";
import {
  CHANGE_PAGE,
  CLEAR_FOR_HOME,
  CLEAR_TO_SEARCH,
  GET_ALL_RECIPES,
  GET_DIETS,
  GET_FILTERED_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_NAME,
  SORT_RECIPES,
} from "./actionsTypes";

const HOSTING = "http://localhost:3001";

export const getAllRecipes = () => {
  return (dispatch) => {
    return axios.get(`${HOSTING}/recipes`).then((res) =>
      dispatch({
        type: GET_ALL_RECIPES,
        payload: res.data,
      })
    );
  };
};

export const getRecipeByName = (name) => {
  return (dispatch) => {
    return axios.get(`${HOSTING}/recipes?name=${name}`).then((res) =>
      dispatch({
        type: GET_RECIPE_BY_NAME,
        payload: res.data,
      })
    );
  };
};

export const getRecipeById = (id) => {
  return (dispatch) => {
    return axios.get(`${HOSTING}/recipes/${id}`).then((res) =>
      dispatch({
        type: GET_RECIPE_BY_ID,
        payload: res.data,
      })
    );
  };
};

export const getFilteredRecipes = (filter) => {
  return (dispatch) => {
    return dispatch({
      type: GET_FILTERED_RECIPES,
      payload: filter,
    });
  };
};

export const sortRecipes = (by, ascDsc) => {
  return (dispatch) => {
    return dispatch({
      type: SORT_RECIPES,
      payload: [by, ascDsc],
    });
  };
};

export const getDiets = () => {
  return (dispatch) => {
    return axios.get(`${HOSTING}/diets`).then((res) => {
      dispatch({
        type: GET_DIETS,
        payload: res.data,
      });
    });
  };
};

export const postRecipe = (title, summary, healthScore, instructions, diet) => {
  return async () => {
    const response = await axios.post(`${HOSTING}/create`, {
      title: title,
      summary: summary,
      healthScore: healthScore,
      instructions: instructions,
      diet: diet,
    });
    return response;
  };
};

export const changePage = (prevNext) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: prevNext,
    });
  };
};

export const clearForHome = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_FOR_HOME,
      payload: [],
    });
  };
};

export const clearToSearch = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_TO_SEARCH,
      payload: [],
    });
  };
};
