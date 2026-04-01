"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "CS5610",
    name: "Web Development",
    description: "Full stack web development module",
    course: "CS5610 Web Development",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Modifying Properties</h4>
      <div className="d-flex gap-2 align-items-center mb-2">
        <FormControl className="w-75" id="wd-assignment-title"
          defaultValue={assignment.title} onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })}/>
        <a id="wd-update-assignment-title"
           className="btn btn-primary"
           href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
      </div>
      <div className="d-flex gap-2 align-items-center mb-2">
        <FormControl className="w-25" id="wd-assignment-score"
          type="number" defaultValue={assignment.score} onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })}/>
        <FormControl className="w-25" id="wd-assignment-completed"
          defaultValue={assignment.completed + ""} onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.value === "true" })}/>
        <a id="wd-update-assignment-score-completed"
           className="btn btn-warning"
           href={`${ASSIGNMENT_API_URL}/score/${assignment.score}/completed/${assignment.completed}`}>
          Update Score and Completed
        </a>
      </div>
      <hr />
      <h4>Module Object</h4>
      <div className="d-flex gap-2 mb-2">
        <a id="wd-retrieve-module" className="btn btn-primary"
           href={`${MODULE_API_URL}`}>
          Get Module
        </a>
        <a id="wd-retrieve-module-name" className="btn btn-secondary"
           href={`${MODULE_API_URL}/name`}>
          Get Module Name
        </a>
      </div>
      <div className="d-flex gap-2 align-items-center mb-2">
        <FormControl className="w-75" id="wd-module-name"
          defaultValue={module.name} onChange={(e) =>
            setModule({ ...module, name: e.target.value })}/>
        <a id="wd-update-module-name" className="btn btn-success"
           href={`${MODULE_API_URL}/name/${module.name}`}>
          Update Module Name
        </a>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <FormControl className="w-75" id="wd-module-description"
          defaultValue={module.description} onChange={(e) =>
            setModule({ ...module, description: e.target.value })}/>
        <a id="wd-update-module-description" className="btn btn-danger"
           href={`${MODULE_API_URL}/description/${module.description}`}>
          Update Module Description
        </a>
      </div>
      <hr />
    </div>
  );
}
