import { createContext, useState } from "react";
import NewTask from "../components/task/NewTask";
import TaskList from "../components/task/TaskList";

const tasks = [
  {
    TaskId: "123455",
    TaskDescription: "Task 1",
    TaskDate: new Date().toDateString(),
    TaskState: "ACTIVE",
  },
  {
    TaskId: "123456",
    TaskDescription: "Task 2",
    TaskDate: new Date().toDateString(),
    TaskState: "ACTIVE",
  },
  {
    TaskId: "123457",
    TaskDescription: "Task 3",
    TaskDate: new Date().toDateString(),
    TaskState: "ACTIVE",
  },
];

function Task() {
  const [taskState, setTaskState] = useState(tasks);
  return (
    <TaskContext.Provider value={[taskState, setTaskState]}>
      <NewTask />
      <TaskList />
    </TaskContext.Provider>
  );
}

export const TaskContext = createContext();
export default Task;
