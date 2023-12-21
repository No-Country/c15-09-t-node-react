import { brewerApi } from "./brewerApi";

export const createReceta = async (RecetaData) => {
  const { data } = await brewerApi.post("/recetas", RecetaData);
  return data;
};

export const getAllRecetas = async () => {
  const { data } = await brewerApi.get("/recetas");
  return data;
};

export const getRecetaById = async (id) => {
  const { data } = await brewerApi.get(`/recetas/${id}`);
  return data;
};

export const postImage = async (formData) => {
  try {
    const { response } = await brewerApi.post("/recetas/img", formData);
    return response;
  } catch (e) {
    console.log(e);
  }
};
