import React from "react";
import PropTypes from "prop-types";
import EventCarousel from "../../components/EventCarousel";

const UserInfoView = ({ uuid }) => {
  return (
    <div>
      <h1>Mon user id est : {uuid}</h1>
      <EventCarousel />
    </div>
  );
};

UserInfoView.propTypes = {
  id: PropTypes.number.isRequired
};

export default UserInfoView;
