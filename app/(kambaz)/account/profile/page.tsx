"use client";
import { Form, Button } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return router.push("/account/signin");
    setProfile(currentUser);
  };
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/account/signin");
  };
  useEffect(() => {
    fetchProfile();
  }, [currentUser]);
  
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <Form.Control
            id="wd-username"
            value={profile.username ?? ""}
            placeholder="username"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <Form.Control
            id="wd-password"
            value={profile.password ?? ""}
            placeholder="password"
            type="password"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <Form.Control
            id="wd-firstname"
            value={profile.firstName ?? ""}
            placeholder="First Name"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <Form.Control
            id="wd-lastname"
            value={profile.lastName ?? ""}
            placeholder="Last Name"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <Form.Control
            id="wd-dob"
            value={profile.dob ?? ""}
            type="date"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <Form.Control
            id="wd-email"
            value={profile.email ?? ""}
            type="email"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Form.Select
            id="wd-role"
            value={profile.role ?? "USER"}
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
          <Button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
            Update
          </Button>
          <Button
            onClick={signout}
            id="wd-signout-btn"
            className="wd-signout-btn btn btn-danger w-100"
          >
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}

