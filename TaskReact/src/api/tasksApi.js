import axios from "axios";
import { baseUrl } from "./baseApi";

const taskUrl = baseUrl + "/api/task/";

export const getTasks = () => axios.get(taskUrl);
export const postTask = (newTask) => axios.post(taskUrl, newTask);
export const deleteTask = (taskId) => axios.delete(taskUrl + taskId);
