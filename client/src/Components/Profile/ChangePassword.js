import React from 'react'
import './ChangePassword.css'
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft, FaUserLock } from "react-icons/fa";
const ChangePassword = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="Page-row-1">
          <div className="Page-row-1-a"><FaUserLock/> Change Password</div>
          <div className="Page-row-1-b">
            <Link to="/profile/settings">
              <FaRegArrowAltCircleLeft className="remove-padd" />
              Back
            </Link>
          </div>
        </div>
        <div className="Page-row-2">
          {/* --start of Change-password-- */}
          <div className="edit-profile-wrapper">
            <div className="signup-body">
              <form action="" method="post" className="signup-form-wrapper">
                <div className="signup-rows">
                  <label htmlFor="password">Current Password</label>
                  <input type="password" id="Password" placeholder="Password" />
                </div>
                <div className="signup-rows">
                  <label htmlFor="cPassword">New Password</label>
                  <input
                    type="password"
                    id="cPassword"
                    placeholder="New password"
                  />
                </div>
                <div className="signup-rows">
                  <label htmlFor="cPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="cPassword"
                    placeholder="Confirm password"
                  />
                </div>

                <div className="signup-rows">
                  <button type="submit">Update Password</button>
                </div>
              </form>
            </div>
          </div>
          {/* --end of change password-- */}
        </div>
      </div>
    </div>
  );
}

export default ChangePassword