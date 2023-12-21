import { brewerApi } from "./brewerApi";

export const getAllStyles = async () => {
  const { data } = await brewerApi.get("/estilos");
  return data;
};

export const getStyleById = async (id) => {
  const { data } = await brewerApi.get(`/estilos/${id}`);
  return data;
};
