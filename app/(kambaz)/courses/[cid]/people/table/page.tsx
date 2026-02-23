"use client";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { useParams } from "next/navigation";
import { users, enrollments } from "../../../database";

export default function PeopleTable() {
    const { cid } = useParams();

    // Cross reference enrollments with users to get students for this course
    const enrolledUserIds = enrollments
      .filter((e) => e.course === cid)
      .map((e) => e.user);

    const enrolledUsers = users.filter((u) => enrolledUserIds.includes(u._id));

  return (
    <div id="wd-people-table">
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
            </thead>
            <tbody>
                {enrolledUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">{user.firstName}</span> <span className="wd-last-name">{user.lastName}</span>
                    </td>
                    <td className="wd-login-id">{user.loginId}</td>
                    <td className="wd-section">{user.section}</td>
                    <td className="wd-role">{user.role}</td>
                    <td className="wd-last-activity">{user.lastActivity}</td>
                    <td className="wd-total-activity">{user.totalActivity}</td>
                  </tr>
                ))}
            </tbody>
        </Table>
    </div>
  );
}
