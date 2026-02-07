"use client";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaInbox } from "react-icons/fa6";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  return (
    <ListGroup id="wd-kambaz-navigation" className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}>
      {/* Northeastern Logo */}
      <ListGroup.Item id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" action className="bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroup.Item>
      <br />

      {/* Account - Icon WHITE when inactive, RED when active */}
      <ListGroup.Item as={Link as any} href="/account" id="wd-account-link" 
          className={`list-group-item text-center border-0 ${pathname.includes("account") ? "bg-white" : "bg-black"}`}> 
        <FaRegCircleUser className={`fs-1 ${pathname.includes("account") ? "text-danger" : "text-white"}`} />
        <br />
        <span className={pathname.includes("account") ? "text-danger" : "text-white"}>Account</span>
      </ListGroup.Item>
      <br />

      {/* Dashboard - Icon RED when inactive, RED when active (on white bg) */}
      <ListGroup.Item as={Link as any} href="/dashboard" id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${pathname.includes("dashboard") ? "bg-white" : "bg-black"}`}>
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        <span className={pathname.includes("dashboard") ? "text-danger" : "text-white"}>Dashboard</span>
      </ListGroup.Item>
      <br />

      {/* Courses */}
      <ListGroup.Item as={Link as any} href="/courses" id="wd-course-link"
        className={`list-group-item text-center border-0 ${pathname.includes("courses") ? "bg-white" : "bg-black"}`}>
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        <span className={pathname.includes("courses") ? "text-danger" : "text-white"}>Courses</span>
      </ListGroup.Item>
      <br />

      {/* Calendar */}
      <ListGroup.Item as={Link as any} href="/calendar" id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${pathname.includes("calendar") ? "bg-white" : "bg-black"}`}>
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        <span className={pathname.includes("calendar") ? "text-danger" : "text-white"}>Calendar</span>
      </ListGroup.Item>
      <br />

      {/* Inbox */}
      <ListGroup.Item as={Link as any} href="/inbox" id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${pathname.includes("inbox") ? "bg-white" : "bg-black"}`}>
        <FaInbox className="fs-1 text-danger" />
        <br />
        <span className={pathname.includes("inbox") ? "text-danger" : "text-white"}>Inbox</span>
      </ListGroup.Item>
      <br />

      {/* Labs */}
      <ListGroup.Item as={Link as any} href="/labs" id="wd-labs-link"
        className={`list-group-item text-center border-0 ${pathname.includes("labs") ? "bg-white" : "bg-black"}`}>
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        <span className={pathname.includes("labs") ? "text-danger" : "text-white"}>Labs</span>
      </ListGroup.Item>
    </ListGroup>
  );
}
