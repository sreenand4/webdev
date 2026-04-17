"use client";
import { useState, useEffect, ReactNode } from "react";
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
  const course = courses.find((course: any) => course._id === cid);
  const [courseNavVisible, setCourseNavVisible] = useState(true);

  const isEnrolled = courses.some((c: any) => c._id === cid);

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
    } else if (!isEnrolled) {
      router.push("/dashboard");
    }
  }, [currentUser, isEnrolled, router]);

  if (!currentUser || !isEnrolled) {
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
