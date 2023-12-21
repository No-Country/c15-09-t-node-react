import { brewerApi } from "./brewerApi";

export const getFavoritesFromUser = async (userId) => {
  try {
    const response = await brewerApi.get(`users/${userId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const addFavoriteToUser = async (recipeId, userId) => {
  try {
    const response = await brewerApi.post(`users/${userId}/favorites/add/${recipeId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
