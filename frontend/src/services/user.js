import { brewerApi } from "./brewerApi";

export const createUser = async (userData) => {
  const { data } = brewerApi.post("/users/register", userData);
  return data;
};

export const getAllUsers = async () => {
  const { data } = brewerApi.get("/users");
  return data;
};

export const getUserById = async (id) => {
  const { data } = brewerApi.get(`/users/${id}`);
  return data;
};

export const getUserByEmail = async () => {
  const { data } = brewerApi.get(`/users/name`);
  return data;
};

export const updateUser = async (id, userData) => {
  const { data } = brewerApi.put(`/users/update/${id}`, userData);
  return data;
};

export const deleteUser = async (id) => {
  const { data } = brewerApi.delete(`/users/delete/${id}`);
  return data;
};