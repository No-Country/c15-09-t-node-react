import { brewerApi } from "./brewerApi";

export const getFavoritesFromUser = async (userId) => {
  try {
    const response = await brewerApi.get(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    // TODO: revisar si con la creacion de la receta, esto se rompe
    return response.data.Recetas;
  } catch (e) {
    console.log(e);
  }
};

export const addFavoriteToUser = async (userId, recipeId) => {
  try {
    const response = await brewerApi.post(`users/${userId}/favorites/add/${recipeId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const removeFavoriteFromUser = async (userId, recipeId) => {
  try {
    const response = await brewerApi.delete(`users/${userId}/favorites/delete/${recipeId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
