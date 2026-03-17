"use client";
import { Form, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import { useState } from "react";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
    const existingAssignment = assignments.find((a: any) => a._id === aid);
    const isNew = aid === "new";

    const [assignment, setAssignment] = useState<any>(
        existingAssignment || {
            title: "New Assignment",
            description: "New Description",
            points: 100,
            dueDate: "",
            availableFrom: "",
            availableUntil: ""
        }
    );

    const dispatch = useDispatch();
    const router = useRouter();

    const handleSave = () => {
        if (isNew) {
            dispatch(addAssignment({ ...assignment, course: cid }));
        } else {
            dispatch(updateAssignment(assignment));
        }
        router.push(`/courses/${cid}/assignments`);
    };

  return (
    <div id="wd-assignments-editor" className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="m-0">Assignment Name</h4>
        </div>
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Control type="text" value={assignment.title} onChange={(e) => setAssignment({...assignment, title: e.target.value})} className="mb-3" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-description">
        <Form.Control as="textarea" rows={3} value={assignment.description} onChange={(e) => setAssignment({...assignment, description: e.target.value})} />
      </Form.Group>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
        </Col>
        <Col md={9}>
            <Form.Control type="number" id="wd-points" value={assignment.points} onChange={(e) => setAssignment({...assignment, points: parseInt(e.target.value)})} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
        </Col>
        <Col md={9}>
           <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
            </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
             <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
        </Col>
        <Col md={9}>
            <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
            </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
             <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
        </Col>
        <Col md={9}>
            <div className="border p-3 rounded">
                <Form.Select id="wd-submission-type" className="mb-3" defaultValue="Online">
                    <option value="Online">Online</option>
                    <option value="Paper">Paper</option>
                </Form.Select>
                <div>
                     <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                     <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" className="mb-2" />
                     <Form.Check type="checkbox" label="Website URL" id="wd-website-url" className="mb-2" />
                     <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" className="mb-2" />
                     <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" className="mb-2" />
                     <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" className="mb-2" />
                </div>
            </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
             <Form.Label>Assign</Form.Label>
        </Col>
        <Col md={9}>
             <div className="border p-3 rounded">
                <Form.Group className="mb-3" controlId="wd-assign-to">
                    <Form.Label className="fw-bold">Assign to</Form.Label>
                    <Form.Control type="text" defaultValue="Everyone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="wd-due-date">
                     <Form.Label className="fw-bold">Due</Form.Label>
                     <Form.Control type="date" value={assignment.dueDate} onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})} />
                </Form.Group>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="wd-available-from">
                            <Form.Label className="fw-bold">Available from</Form.Label>
                            <Form.Control type="date" value={assignment.availableFrom} onChange={(e) => setAssignment({...assignment, availableFrom: e.target.value})} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                         <Form.Group className="mb-3" controlId="wd-available-until">
                            <Form.Label className="fw-bold">Until</Form.Label>
                            <Form.Control type="date" value={assignment.availableUntil} onChange={(e) => setAssignment({...assignment, availableUntil: e.target.value})} />
                        </Form.Group>
                    </Col>
                </Row>
             </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-end">
         <Link href={`/courses/${cid}/assignments`} className="btn btn-secondary me-2">Cancel</Link>
         <Button onClick={handleSave} className="btn btn-danger">Save</Button>
      </div>
    </div>
  );
}
