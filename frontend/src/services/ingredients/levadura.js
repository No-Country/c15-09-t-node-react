import { brewerApi } from "../brewerApi";

export const createLevadura = async (levaduraData) => {
  const { data } = await brewerApi.post("/ingredientes/levaduras", levaduraData);
  return data;
};

export const getAllLevaduras = async () => {
  const { data } = await brewerApi.get("/ingredientes/levaduras");
  return data;
};

export const getLevaduraById = async (id) => {
  const { data } = await brewerApi.get(`/ingredientes/levaduras/${id}`);
  return data;
};

export const updateLevadura = async (id, levaduraData) => {
  const { data } = await brewerApi.put(`/ingredientes/levaduras/${id}`, levaduraData);
  return data;
};

export const deleteLevadura = async (id) => {
  const { data } = await brewerApi.delete(`/ingredientes/levaduras/${id}`);
  return data;
};
