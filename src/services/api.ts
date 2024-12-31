import axios from "axios";
import {Student} from "../types/student";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Replace with your backend URL
});

export const getStudents = () => api.get("/students");
export const getStudentById = (id: string) => api.get(`/students/${id}`);
export const addStudent = (data: Student) => api.post("/students", data);
export const updateStudent = (id: string, data: Student) =>
  api.put(`/students/${id}`, data);
export const deleteStudent = (id: number) => api.delete(`/students/${id}`);

export default api;
