import { brewerApi } from "../brewerApi";

export const createLupulo = async (lupuloData) => {
  const { data } = await brewerApi.post("/ingredientes/ingredientes/lupulos", lupuloData);
  return data;
};

export const getAllLupulos = async () => {
  const { data } = await brewerApi.get("/ingredientes/lupulos");
  return data;
};

export const getLupuloById = async (id) => {
  const { data } = await brewerApi.get(`/ingredientes/lupulos/${id}`);
  return data;
};

export const updateLupulo = async (id, lupuloData) => {
  const { data } = await brewerApi.put(`/ingredientes/lupulos/${id}`, lupuloData);
  return data;
};

export const deleteLupulo = async (id) => {
  const { data } = await brewerApi.delete(`/ingredientes/lupulos/${id}`);
  return data;
};
