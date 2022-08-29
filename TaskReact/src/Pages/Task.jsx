import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { getTasks } from "../api/tasksApi";
import NewTask from "../components/task/NewTask";
import TaskList from "../components/task/TaskList";
import { GlobalContext } from "../contexts/GlobalContext";

function Task() {
  const [taskState, setTaskState] = useState([]);
  const { setShowToast, setToastHeader, setToastBody } =
    useContext(GlobalContext);

  useEffect(() => {
    getTasks()
      .then((res) => setTaskState(res.data))
      .catch((_) => {
        setToastHeader("Error");
        setToastBody("An error ocurred while trying to get the tasks");
        setShowToast(true);
      });
  }, []);

  return (
    <TaskContext.Provider value={[taskState, setTaskState]}>
      <div className="container my-4">
        <NewTask />
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
}

export const TaskContext = createContext();
export default Task;
