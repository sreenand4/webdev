"use client";
import { useState, ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "../../store";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const course = courses.find((course: any) => course._id === cid);
  const [courseNavVisible, setCourseNavVisible] = useState(true);

  if (!currentUser) {
    router.push("/account/signin");
    return null;
  }

  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser?._id && e.course === cid,
  );
  if (!isEnrolled) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" 
                        onClick={() => setCourseNavVisible(!courseNavVisible)}
                        style={{ cursor: "pointer" }} />
        {course?.name} &gt; <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        {courseNavVisible && (
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}
