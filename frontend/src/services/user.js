import { brewerApi } from "./brewerApi";

export const createUser = async (userData) => {
  try {
    const response = await brewerApi.post("/users/register", userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = brewerApi.post(`/login/`, userData);
    console.log(response);
    return response;
  } catch (e) {
    console.error("Error de inicio de sesion:", e);
  }
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
