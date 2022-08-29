import { createContext, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { TaskContext } from "../../Pages/Task";

function TaskList() {
  const [taskState, setTaskState] = useContext(TaskContext);

  const tasksElement = taskState.map((task) => (
    <div className="d-flex justify-content-between mb-4" key={task.TaskId}>
      <span>{task.TaskDescription}</span>
      <span>{task.TaskDate.toString()}</span>
      <Button variant="primary">Delete</Button>
    </div>
  ));

  return (
    <div className="row mt-5">
      <div className="col">{tasksElement}</div>
    </div>
  );
}

export default TaskList;
