export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const removeRecipe = (recipeId) => ({
  type: "REMOVE_RECIPE",
  payload: recipeId,
});
