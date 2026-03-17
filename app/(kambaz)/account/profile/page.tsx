"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return redirect("/account/signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/account/signin");
  };
  useEffect(() => {
    fetchProfile();
  }, [currentUser]); // Note: dependency array needs adjustment, but snippet says []
  
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <Form.Control id="wd-username" defaultValue={profile.username} placeholder="username" className="mb-2" />
          <Form.Control id="wd-password" defaultValue={profile.password} placeholder="password" type="password" className="mb-2" />
          <Form.Control id="wd-firstname" defaultValue={profile.firstName} placeholder="First Name" className="mb-2" />
          <Form.Control id="wd-lastname" defaultValue={profile.lastName} placeholder="Last Name" className="mb-2" />
          <Form.Control id="wd-dob" defaultValue={profile.dob} type="date" className="mb-2" />
          <Form.Control id="wd-email" defaultValue={profile.email} type="email" className="mb-2" />
          <Form.Select id="wd-role" defaultValue={profile.role} className="mb-2">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
          <Button onClick={signout} id="wd-signout-btn" className="btn btn-danger w-100">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}

