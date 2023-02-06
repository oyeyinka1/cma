import React from 'react'
import './DeleteProfile.css'
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft , FaUserShield} from "react-icons/fa";

const DeleteProfile = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="Page-row-1">
          <div className="Page-row-1-a">
            <FaUserShield /> Delete Account
          </div>
          <div className="Page-row-1-b">
            <Link to="/profile/settings">
              <FaRegArrowAltCircleLeft className="remove-padd" />
              Back
            </Link>
          </div>
        </div>
        <div className="Page-row-2">
          {/* --start of Delete-account-- */}
          <div className="edit-profile-wrapper">
            <div className="signup-body">
              <form action="" method="post" className="signup-form-wrapper">
                <div className="signup-rows">
                  <label htmlFor="password">Current Password</label>
                  <input type="password" id="Password" placeholder="Password" />
                </div>

                <div className="signup-rows">
                  <button type="submit">Delete Account</button>
                </div>
              </form>
            </div>
          </div>
          {/* --end of delete account-- */}
        </div>
      </div>
    </div>
  );
}

export default DeleteProfile