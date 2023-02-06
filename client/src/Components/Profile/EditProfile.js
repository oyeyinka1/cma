import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaUserEdit } from "react-icons/fa";

const EditProfile = () => {
  return (
    <div className="page-wrapper">
      <div className="page-section">
        <div className="Page-row-1">
          <div className="Page-row-1-a"><FaUserEdit/> Update Profile</div>
          <div className="Page-row-1-b">
            <Link to="/profile/settings">
              <FaRegArrowAltCircleLeft className="remove-padd" />
              Back
            </Link>
          </div>
        </div>
        <div className="Page-row-2">
          {/* --start of edit-profile-- */}
          <div className="edit-profile-wrapper">
            <div className="signup-body">
              <form action="" method="post" className="signup-form-wrapper">
                <div className="signup-rows">
                  <label htmlFor="firstname">First name</label>
                  <input type="text" placeholder="First name" id="firstname" />
                </div>
                <div className="signup-rows">
                  <label htmlFor="lastname">Last name</label>
                  <input type="text" placeholder="Last name" id="lastname" />
                </div>

                <div className="signup-rows">
                  <label htmlFor="username" disabled>
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="username"
                    disabled
                  />
                </div>
                <div className="signup-rows" disabled>
                  {/* <label htmlFor="gender">Gender</label> */}
                  <span>
                    Gender:
                    <label htmlFor="male">
                      <input type="radio" name="gender" id="male" disabled />
                      Male
                    </label>
                    <label htmlFor="female">
                      <input type="radio" name="gender" id="female" disabled />
                      Female
                    </label>
                  </span>
                </div>
                <div className="signup-rows" disabled>
                  <label htmlFor="dateOfBirth" disabled>
                    Date of Birth
                  </label>
                  <input type="date" id="dateOfBirth" disabled />
                </div>

                <div className="signup-rows">
                  <label htmlFor="country" disabled>
                    Country
                  </label>
                  <select name="" id="country" disabled>
                    <option value="">Country</option>
                  </select>
                </div>

                <div className="signup-rows">
                  <label htmlFor="state" disabled>
                    State
                  </label>
                  <select name="" id="state" disabled>
                    <option value="" disabled>
                      State
                    </option>
                  </select>
                </div>

                <div className="signup-rows">
                  <label htmlFor="country" disabled>
                    city
                  </label>
                  <select name="" id="city" disabled>
                    <option value="">City</option>
                  </select>
                </div>

                <div className="signup-rows">
                  <label htmlFor="firstname">Email</label>
                  <input type="email" placeholder="Email/username" id="email" />
                </div>
                <div className="signup-rows">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="phone" />
                </div>

                <div className="signup-rows">
                  <button type="submit">Update Profile</button>
                </div>
              </form>
            </div>
          </div>
          {/* --end of edit-profile-- */}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
