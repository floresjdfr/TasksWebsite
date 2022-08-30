import { useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { TaskContext } from "../../Pages/Task";
import { getTasks, postTask } from "../../api/tasksApi";
import { GlobalContext } from "../../contexts/GlobalContext";

function NewTask() {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});

  const [taskState, setTaskState] = useContext(TaskContext);
  const { setShowToast, setToastHeader, setToastBody } =
    useContext(GlobalContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    inputs[name] = value;
    setInputs(inputs);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      taskDescription: inputs.Description,
      taskDate: inputs.Date,
      taskState: "ACTIVE",
    };

    postTask(newTask)
      .then((_) => getTasks())
      .then((res) => setTaskState(res.data))
      .catch((_) => {
        setToastHeader("Error");
        setToastBody(
          "An error ocurred while executing the request. Please try again"
        );
        setShowToast(true);
      });
    handleClose();
  };

  return (
    <div className="row">
      <div className="col">
        <Button className="float-end" variant="primary" onClick={handleShow}>
          New Task
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Due date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="Date"
                  placeholder="Date"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Save Task
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default NewTask;
