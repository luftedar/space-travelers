import React from 'react';
import MyMissions from './missionProfile';
import Myrocket from './Myrocket';
import '../../styles/profile.scss';

function MyProfile() {
  return (
    <div className="Profile-main">
      <MyMissions />
      <Myrocket />
    </div>
  );
}

export default MyProfile;
