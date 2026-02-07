"use client";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
  return (
    <div id="wd-assignments-editor" className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="m-0">Assignment Name</h4>
        </div>
      <Form.Group className="mb-3" controlId="wd-name">
         {/* <Form.Label>Assignment Name</Form.Label> - Instructions usually imply label, but UI figure might show just the input or label clearly. I'll add label for accessibility/standard. */}
        <Form.Control type="text" defaultValue="A1 - ENV + HTML" className="mb-3" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-description">
        <Form.Control as="textarea" rows={3} defaultValue="The assignment is available online Submit a link to the landing page of" />
      </Form.Group>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
        </Col>
        <Col md={9}>
            <Form.Control type="number" id="wd-points" defaultValue={100} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-md-end">
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
        </Col>
        <Col md={9}>
           <Form.Select id="wd-group">
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
            <Form.Select id="wd-display-grade-as">
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
                <Form.Select id="wd-submission-type" className="mb-3">
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
                     <Form.Control type="date" defaultValue="2024-05-13" />
                </Form.Group>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="wd-available-from">
                            <Form.Label className="fw-bold">Available from</Form.Label>
                            <Form.Control type="date" defaultValue="2024-05-06" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                         <Form.Group className="mb-3" controlId="wd-available-until">
                            <Form.Label className="fw-bold">Until</Form.Label>
                            <Form.Control type="date" defaultValue="2024-05-20" />
                        </Form.Group>
                    </Col>
                </Row>
             </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-end">
         <Link href={`/courses/${cid}/assignments`} className="btn btn-secondary me-2">Cancel</Link>
         <Link href={`/courses/${cid}/assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}
