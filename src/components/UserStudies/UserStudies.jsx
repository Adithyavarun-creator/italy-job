import React from "react";
import "./UserStudies.css";
import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const UserStudies = ({ user }) => {
  return (
    <section className="userstudies-section">
      <div>
        <h2 className="headingtitle flex">
          <FaUserGraduate />
          User Current Qualification
        </h2>
      </div>

      <div className="graduatebox">
        <div>
          <FaGraduationCap className="graduateicon" />
        </div>
        <div>
          <h3 className="universitytext">
            Graduated from {user.university}&nbsp;
          </h3>
        </div>
      </div>
    </section>
  );
};

export default UserStudies;
