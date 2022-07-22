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
} from "../Actions/actionsTypes";

const initalState = {
  recipes: [],
  searchResult: [],
  filteredRecipes: [],
  recipe: [],
  diets: [],
  page: [0, 9],
  pageNumber: 1,
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case GET_RECIPE_BY_NAME:
      return {
        ...state,
        searchResult: payload,
      };
    case GET_RECIPE_BY_ID:
      return {
        ...state,
        recipe: payload,
      };
    case GET_FILTERED_RECIPES:
      const toFilter = state.recipes;
      const toFilterSearched = state.searchResult;
      let filteredRecipes = [];
      state.searchResult.length
        ? (filteredRecipes = toFilterSearched.filter((r) =>
            r.diet.includes(payload)
          ))
        : (filteredRecipes = toFilter.filter((r) => {
            if (r.diet) {
              return r.diet.includes(payload);
            }

            if (r.diets) {
              let aux = r.diets.map((r) => r.name);
              return aux.includes(payload);
            }
            return true;
          }));

      return {
        ...state,
        filteredRecipes: filteredRecipes,
        page: [0, 9],
        pageNumber: 1,
      };
    case SORT_RECIPES:
      const toSortRecipes = state.recipes;
      const toSortFiltered = state.filteredRecipes;
      const toSortSearch = state.searchResult;

      let sortedRecipes = [];
      if (payload[0] === "name" && payload[1] === "asc") {
        state.filteredRecipes.length
          ? (sortedRecipes = toSortFiltered.sort((a, b) =>
              a.title.localeCompare(b.title)
            ))
          : state.searchResult.length
          ? (sortedRecipes = toSortSearch.sort((a, b) =>
              a.title.localeCompare(b.title)
            ))
          : (sortedRecipes = toSortRecipes.sort((a, b) =>
              a.title.localeCompare(b.title)
            ));
      }
      if (payload[0] === "name" && payload[1] === "dsc") {
        state.filteredRecipes.length
          ? (sortedRecipes = toSortFiltered.sort((a, b) =>
              b.title.localeCompare(a.title)
            ))
          : state.searchResult.length
          ? (sortedRecipes = toSortSearch.sort((a, b) =>
              b.title.localeCompare(a.title)
            ))
          : (sortedRecipes = toSortRecipes.sort((a, b) =>
              b.title.localeCompare(a.title)
            ));
      }
      if (payload[0] === "healthScore" && payload[1] === "asc") {
        state.filteredRecipes.length
          ? (sortedRecipes = toSortFiltered.sort((a, b) => {
              return a.healthScore - b.healthScore;
            }))
          : state.searchResult.length
          ? (sortedRecipes = toSortSearch.sort((a, b) => {
              return a.healthScore - b.healthScore;
            }))
          : (sortedRecipes = toSortRecipes.sort((a, b) => {
              return a.healthScore - b.healthScore;
            }));
      }
      if (payload[0] === "healthScore" && payload[1] === "dsc") {
        state.filteredRecipes.length
          ? (sortedRecipes = toSortFiltered.sort((a, b) => {
              return b.healthScore - a.healthScore;
            }))
          : state.searchResult.length
          ? (sortedRecipes = toSortSearch.sort((a, b) => {
              return b.healthScore - a.healthScore;
            }))
          : (sortedRecipes = toSortRecipes.sort((a, b) => {
              return b.healthScore - a.healthScore;
            }));
      }
      return {
        ...state,
        recipes: sortedRecipes,
        page: [0, 9],
        pageNumber: 1,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };
    case CHANGE_PAGE:
      const pageNumber =
        payload === "next" ? (state.pageNumber += 1) : (state.pageNumber -= 1);
      const page =
        payload === "next"
          ? state.page.map((e) => e + 9)
          : state.page.map((e) => e - 9);
      return {
        ...state,
        page: page,
        pageNumber: pageNumber,
      };
    case CLEAR_FOR_HOME:
      return {
        ...state,
        searchResult: payload,
        recipes: payload,
        page: [0, 9],
        pageNumber: 1,
      };
    case CLEAR_TO_SEARCH:
      return {
        ...state,
        searchResult: payload,
        page: [0, 9],
        pageNumber: 1,
      };
    default:
      return state;
  }
};
