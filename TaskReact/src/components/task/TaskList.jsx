import { createContext, useContext } from "react";
import { Button } from "react-bootstrap";
import { TaskContext } from "../../Pages/Task";
import { deleteTask, getTasks } from "../../api/tasksApi";
import { GlobalContext } from "../../contexts/GlobalContext";

function TaskList() {
  const [taskState, setTaskState] = useContext(TaskContext);
  const { setShowToast, setToastHeader, setToastBody } =
    useContext(GlobalContext);

  const handleOnClick = function (id) {
    deleteTask(id)
      .then((_) => getTasks())
      .then((res) => setTaskState(res.data))
      .catch((_) => {
        setToastHeader("Error");
        setToastBody("An error ocurred while deleting the task");
        setShowToast(true);
      });
  };

  const tasksElement = taskState.map((task) => (
    <div className="d-flex justify-content-between mb-4" key={task.taskId}>
      <span>{task.taskDescription}</span>
      <span>{new Date(task.taskDate).toISOString().slice(0, 10)}</span>
      <Button variant="danger" onClick={() => handleOnClick(task.taskId)}>
        Delete
      </Button>
    </div>
  ));

  return (
    <div className="row mt-5">
      <div className="col">{tasksElement}</div>
    </div>
  );
}

export default TaskList;
