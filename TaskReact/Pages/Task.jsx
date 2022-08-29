import axios from "axios";
import { createContext, useEffect, useState } from "react";
import NewTask from "../components/task/NewTask";
import TaskList from "../components/task/TaskList";

function Task() {
  const [taskState, setTaskState] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44355/api/Task")
      .then((res) => {
        setTaskState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <TaskContext.Provider value={[taskState, setTaskState]}>
      <NewTask />
      <TaskList />
    </TaskContext.Provider>
  );
}

export const TaskContext = createContext();
export default Task;
