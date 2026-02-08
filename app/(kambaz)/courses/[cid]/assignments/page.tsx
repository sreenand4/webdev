"use client";
import { BsGripVertical, BsPlus, BsCheckCircleFill } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ListGroup, Button, Form, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Assignments() {
  const { cid } = useParams();
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
          <Button variant="danger" id="wd-add-assignment">
             <BsPlus className="fs-4" /> Assignment
          </Button>
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
        <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
             <div className="flex-grow-1">
               <Link href={`/courses/${cid}/assignments/123`} className="wd-assignment-link text-black text-decoration-none fw-bold">
                 A1 - ENV + HTML
               </Link>
               <br />
               <span className="text-secondary" style={{ fontSize: "14px" }}>
                 <span className="text-danger">Multiple Modules</span> | 
                 <strong> Not available until</strong> May 6 at 12:00am | 
                 <strong> Due</strong> May 13 at 11:59pm | 100 pts
               </span>
             </div>
             <BsCheckCircleFill className="text-success fs-4 me-3" />
             <IoEllipsisVertical className="fs-4" />
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
           <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
             <div className="flex-grow-1">
               <Link href={`/courses/${cid}/assignments/124`} className="wd-assignment-link text-black text-decoration-none fw-bold">
                 A2 - CSS + BOOTSTRAP
               </Link>
               <br />
               <span className="text-secondary" style={{ fontSize: "14px" }}>
                 <span className="text-danger">Multiple Modules</span> | 
                 <strong> Not available until</strong> May 13 at 12:00am | 
                 <strong> Due</strong> May 20 at 11:59pm | 100 pts
               </span>
             </div>
             <BsCheckCircleFill className="text-success fs-4 me-3" />
             <IoEllipsisVertical className="fs-4" />
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
           <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
             <div className="flex-grow-1">
               <Link href={`/courses/${cid}/assignments/125`} className="wd-assignment-link text-black text-decoration-none fw-bold">
                 A3 - JAVASCRIPT + REACT
               </Link>
               <br />
               <span className="text-secondary" style={{ fontSize: "14px" }}>
                 <span className="text-danger">Multiple Modules</span> | 
                 <strong> Not available until</strong> May 20 at 12:00am | 
                 <strong> Due</strong> May 27 at 11:59pm | 100 pts
               </span>
             </div>
             <BsCheckCircleFill className="text-success fs-4 me-3" />
             <IoEllipsisVertical className="fs-4" />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

