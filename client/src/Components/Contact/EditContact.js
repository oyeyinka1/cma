import React from "react";
import "./EditContact.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
const EditContact = () => {
  return (
    <div className="page-wrapper">
      <form action="" method="post">
        <div className="page-section">
          <div className="Page-row-1">
            <div className="Page-row-1-a">Edit Contact</div>
            <div className="Page-row-1-b">
              <Link to="/profile">
                <FaRegArrowAltCircleLeft className="remove-padd" />
                Back
              </Link>
            </div>
          </div>
          <div className="Page-row-2">
            <div className="edit-contact-wrapper">
              <div className="input-grp">
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
              </div>
              <div className="input-grp">
                <input type="text" placeholder="phone" />
                <input type="email" placeholder="email" />
              </div>
              <div className="input-grp">
                <select name="" id="">
                  <option value="">Occupation</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Page-row-3">
            <div className="Page-row-3-a">
              <Link to="/profile">Cancel</Link>
            </div>
            <div className="Page-row-3-b">
              <input type="submit" value="Update" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
