import React from "react";
import { useLocation } from "react-router-dom";

const UserDashboard = () => {
  const { state } = useLocation();
  const user = state?.user;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome to your Dashboard</h2>
      {user ? (
        <div>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default UserDashboard;
