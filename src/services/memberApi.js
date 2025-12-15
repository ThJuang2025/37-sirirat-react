import axios from "axios";

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

export const getMembers = () => axios.get(API_URL);

export const createMember = (data) => axios.post(API_URL, data);

export const deleteMember = (id) => axios.delete(`${API_URL}/${id}`);
