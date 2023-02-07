import React from "react";
import "./Profile.css";
import userPhoto from "../../assests/images/users/nasty c.jpg";

import ProfileCol1 from "./ProfileCol1";
import ProfileCol2 from "./ProfileCol2";
// import fakeUsers from "./FakeUsers";
// import fakeContacts from "./FakeContact";

const Profile = () => {
 

  return (
    <div className="profile-wrapper">
      <ProfileCol1 userPhoto={userPhoto} />
      <ProfileCol2 />
    </div>
  );
};

export default Profile;
