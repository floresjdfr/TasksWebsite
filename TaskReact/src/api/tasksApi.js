import axios from "axios";
import { baseApi } from "./baseApi";

const taskUrl = baseApi + "task/";

export const getTasks = () => axios.get(taskUrl);
export const postTask = (newTask) => axios.post(taskUrl, newTask);
export const deleteTask = (taskId) => axios.delete(taskUrl + taskId);
