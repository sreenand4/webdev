"use client";
import { BsGripVertical, BsPlus, BsCheckCircleFill } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ListGroup, Button, Form, InputGroup, Modal } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { deleteAssignment, setAssignments } from "./reducer";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [toDelete, setToDelete] = useState("");
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  const deleteHandler = async () => {
    await client.deleteAssignment(toDelete);
    dispatch(deleteAssignment(toDelete));
    setShowModal(false);
  };
  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup className="w-50">
          <InputGroup.Text className="bg-white border-end-0">
             <FaMagnifyingGlass />
          </InputGroup.Text>
          <Form.Control id="wd-search-assignment" placeholder="Search for Assignments"  className="border-start-0" />
        </InputGroup>
        <div>
          <Button variant="secondary" className="me-1" id="wd-add-assignment-group">
            <BsPlus className="fs-4" /> Group
          </Button>
          <Link
            href={`/courses/${cid}/assignments/new`}
            className="btn btn-danger"
            id="wd-add-assignment"
          >
             <FaPlus className="fs-6 mb-1 me-1" /> Assignment
          </Link>
        </div>
      </div>

      <div className="wd-title p-3 ps-2 bg-secondary fw-bold d-flex justify-content-between align-items-center rounded-top">
        <div>
          <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS
        </div>
        <div className="d-flex align-items-center">
            <span className="border border-dark rounded-pill px-3 py-1 me-2 fst-italic">40% of Total</span>
           <BsPlus className="fs-4" />
           <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      <ListGroup className="rounded-0 rounded-bottom">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
          <ListGroup.Item key={assignment._id} className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3 text-secondary" />
               <div className="flex-grow-1">
                 <Link href={`/courses/${cid}/assignments/${assignment._id}`} className="wd-assignment-link text-black text-decoration-none fw-bold">
                   {assignment.title}
                 </Link>
                 <br />
                 <span className="text-secondary" style={{ fontSize: "14px" }}>
                   <span className="text-danger">Multiple Modules</span> | 
                   <strong> Not available until</strong> {assignment.availableFrom} | 
                   <strong> Due</strong> {assignment.dueDate} | {assignment.points} pts
                 </span>
               </div>
               <BsCheckCircleFill className="text-success fs-4 me-3" />
               <FaTrash className="text-danger me-3" style={{ cursor: "pointer" }} onClick={() => { setToDelete(assignment._id); setShowModal(true); }} />
               <IoEllipsisVertical className="fs-4" />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
