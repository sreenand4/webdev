"use client";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as courseClient from "../../../client";
import PeopleDetails from "../Details";

export default function PeopleTable({
  users: externalUsers,
  fetchUsers: externalFetchUsers,
}: {
  users?: any[];
  fetchUsers?: () => void;
} = {}) {
    const { cid } = useParams();
    const [internalUsers, setInternalUsers] = useState<any[]>([]);
    const [showDetails, setShowDetails] = useState(false);
    const [showUserId, setShowUserId] = useState<string | null>(null);

    const isExternalMode = externalUsers !== undefined;
    const users = isExternalMode ? externalUsers : internalUsers;

    const fetchUsers = async () => {
      if (isExternalMode) return;
      if (!cid) return;
      const data = await courseClient.findUsersForCourse(cid as string);
      setInternalUsers(data);
    };

    useEffect(() => {
      if (!isExternalMode) fetchUsers();
    }, [cid]);

  return (
    <div id="wd-people-table">
        {showDetails && (
          <PeopleDetails
            uid={showUserId}
            onClose={() => {
              setShowDetails(false);
            }}
          />
        )}
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
                {users.filter((user) => user != null).map((user) => (
                  <tr key={user._id}>
                    <td className="wd-full-name text-nowrap">
                        <span
                          className="text-decoration-none"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setShowDetails(true);
                            setShowUserId(user._id);
                          }}
                        >
                          <FaUserCircle className="me-2 fs-1 text-secondary" />
                          <span className="wd-first-name">{user.firstName}</span>{" "}
                          <span className="wd-last-name">{user.lastName}</span>
                        </span>
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
