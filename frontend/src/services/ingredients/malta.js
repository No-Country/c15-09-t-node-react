import { brewerApi } from "../brewerApi";

export const createMalta = async (maltaData) => {
  const { data } = await brewerApi.post("/ingredientes/maltas", maltaData);
  return data;
};

export const getAllMaltas = async () => {
  const { data } = await brewerApi.get("/ingredientes/maltas");
  return data;
};

export const getMaltaById = async (id) => {
  const { data } = await brewerApi.get(`/ingredientes/maltas/${id}`);
  return data;
};

export const updateMalta = async (id, maltaData) => {
  const { data } = await brewerApi.put(`/ingredientes/maltas/${id}`, maltaData);
  return data;
};

export const deleteMalta = async (id) => {
  const { data } = await brewerApi.delete(`/ingredientes/maltas/${id}`);
  return data;
};
