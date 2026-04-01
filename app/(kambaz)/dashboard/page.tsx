"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../courses/reducer";
import { RootState } from "../store";
import { useRouter } from "next/navigation";
import * as client from "../courses/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const fetchCourses = async () => {
    try {
      const all = await client.fetchAllCourses();
      const myCourses = await client.findMyCourses();
      setAllCourses(all);
      dispatch(setCourses(myCourses));
    } catch (error) {
      console.error(error);
    }
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c: any) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };
  const isEnrolled = (courseId: string) =>
    courses.some((c: any) => c._id === courseId);
  const onEnroll = async (courseId: string) => {
    await client.enrollIntoCourse(courseId);
    await fetchCourses();
  };
  const onUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse(courseId);
    await fetchCourses();
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    fetchCourses();
  }, [currentUser]);

  if (!currentUser) {
    return null;
  }
  const displayedCourses = showAllCourses ? allCourses : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={onAddNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={onUpdateCourse} id="wd-update-course-click">
              Update </button>
          </h5>
          <hr />
          <FormControl value={course.name} className="mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <FormControl value={course.description} as="textarea" rows={3}
                   onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-enrollments-btn"
        >
          Enrollments
        </button>
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/courses/${course._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{height:"100px"}}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>
                    {showAllCourses && (
                      <>
                        {isEnrolled(course._id) ? (
                          <button
                            className="btn btn-danger float-end"
                            id="wd-unenroll-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              onUnenroll(course._id);
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success float-end"
                            id="wd-enroll-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              onEnroll(course._id);
                            }}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                    {currentUser?.role === "FACULTY" && (
                      <>
                        <button onClick={(event) => {
                                  event.preventDefault();
                                  onDeleteCourse(course._id);
                                }} className="btn btn-danger float-end ms-2"
                                id="wd-delete-course-click">
                                Delete
                        </button>
                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
