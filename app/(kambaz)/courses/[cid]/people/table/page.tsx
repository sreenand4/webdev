"use client";
import { FaUserCircle } from "react-icons/fa";
import { Button, FormControl, Table } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as client from "../../../client";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export default function PeopleTable() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [users, setUsers] = useState<any[]>([]);
    const [editingUser, setEditingUser] = useState<any>(null);
    const [newUser, setNewUser] = useState<any>({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    });
    const fetchUsers = async () => {
      const users = await client.findUsersForCourse(cid as string);
      setUsers(users);
    };
    const onCreateUser = async () => {
      const createdUser = await client.createUserForCourse(cid as string, newUser);
      setUsers([...users, createdUser]);
      setNewUser({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "STUDENT",
        loginId: "",
        section: "",
        lastActivity: "",
        totalActivity: "",
      });
    };
    const onDeleteUser = async (userId: string) => {
      await client.deleteUser(userId);
      setUsers(users.filter((u: any) => u._id !== userId));
    };
    const onSaveUser = async () => {
      const updatedUser = await client.updateUser(editingUser);
      setUsers(users.map((u: any) => (u._id === updatedUser._id ? updatedUser : u)));
      setEditingUser(null);
    };
    useEffect(() => {
      fetchUsers();
    }, [cid]);

  return (
    <div id="wd-people-table">
        {currentUser?.role === "FACULTY" && (
          <div className="mb-3">
            <h5>Create User</h5>
            <div className="d-flex gap-2 mb-2">
              <FormControl
                placeholder="username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
              <FormControl
                placeholder="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
              <FormControl
                placeholder="first name"
                value={newUser.firstName}
                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
              />
              <FormControl
                placeholder="last name"
                value={newUser.lastName}
                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
              />
              <Button onClick={onCreateUser} className="btn btn-success">
                Add
              </Button>
            </div>
          </div>
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
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">{user.firstName}</span>{" "}
                        <span className="wd-last-name">{user.lastName}</span>
                    </td>
                    <td className="wd-login-id">{user.loginId}</td>
                    <td className="wd-section">{user.section}</td>
                    <td className="wd-role">{user.role}</td>
                    <td className="wd-last-activity">{user.lastActivity}</td>
                    <td className="wd-total-activity">{user.totalActivity}</td>
                    {currentUser?.role === "FACULTY" && (
                      <td>
                        <Button
                          size="sm"
                          className="me-2"
                          onClick={() => setEditingUser(user)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => onDeleteUser(user._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
        </Table>
        {editingUser && (
          <div className="border p-3 mt-2">
            <h5>Edit User</h5>
            <div className="d-flex gap-2 mb-2">
              <FormControl
                value={editingUser.firstName || ""}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, firstName: e.target.value })
                }
              />
              <FormControl
                value={editingUser.lastName || ""}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, lastName: e.target.value })
                }
              />
              <FormControl
                value={editingUser.role || ""}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, role: e.target.value })
                }
              />
              <Button onClick={onSaveUser}>Save</Button>
            </div>
          </div>
        )}
    </div>
  );
}
