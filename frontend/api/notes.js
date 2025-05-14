import { baseApi } from "./base";

export const createNotes = async (data, signal) => {
  try {
    return await baseApi.post("/notes/", data, signal).then((res) => res.data);
  } catch (error) {
    throw error.response.data;
  }
};

export const getNotes = async () => {
  return await baseApi.get("/notes").then((res) => res.data);
};

export const getNote = async (id, signal) => {
  return await baseApi.get(`/notes/${id}`, signal).then((res) => res.data);
};

export const deleteNote = async (id) => {
  return await baseApi.delete(`/notes/${id}`).then((res) => res.data);
};

export const updateNotes = async (id, data, signal) => {
  try {
    return await baseApi
      .put(`/notes/${id}`, data, signal)
      .then((res) => res.data);
  } catch (error) {
    throw error.response.data;
  }
};
