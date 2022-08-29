import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TaskContext } from "../../Pages/Task";

function NewTask() {
  const [show, setShow] = useState(false);
  const [taskState, setTaskState] = useContext(TaskContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row">
      <div className="col">
        <Button className="float-end" variant="primary" onClick={handleShow}>
          New Task
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Form>
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
