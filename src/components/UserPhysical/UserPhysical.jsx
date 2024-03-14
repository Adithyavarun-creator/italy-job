import React from "react";
import "./UserPhysical.css";
import { FaUserCheck, FaEye } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";
import { SlUserFemale } from "react-icons/sl";
import { MdOutlineBloodtype } from "react-icons/md";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { BiFemale, BiMale } from "react-icons/bi";

const UserPhysical = ({ user }) => {
  return (
    <section className="userphysical-section">
      <div>
        <h2 className="headingtitle flex">
          <FaUserCheck />
          User Physical Details
        </h2>
      </div>

      <div className="physicallayoutcontent">
        <div className="align">
          {user.gender === "male" ? (
            <BiMale className="companyicon" />
          ) : (
            <BiFemale className="companyicon" />
          )}
        </div>
        <div className="physicallayout">
          <div className="boxes">
            <h4 className="labeltitle flex">
              <GiBodyHeight className="singleusericon" />
              Height
            </h4>
            <span className="inputtitle">{user.height}</span>
          </div>
          <div className="boxes">
            <h4 className="labeltitle flex">
              <FaWeightScale className="singleusericon" />
              Weight
            </h4>
            <span className="inputtitle">{user.weight}</span>
          </div>
          <div className="boxes">
            <h4 className="labeltitle flex">
              <FaEye className="singleusericon" />
              Eye color
            </h4>
            <span className="inputtitle">{user.eyeColor}</span>
          </div>
          <div className="boxes">
            <h4 className="labeltitle flex">
              <SlUserFemale className="singleusericon" />
              Hair
            </h4>
            <span className="inputtitle">
              {user.hair.color} & {user.hair.type}
            </span>
          </div>
          <div className="boxes">
            <h4 className="labeltitle flex">
              <MdOutlineBloodtype className="singleusericon" />
              Blood group
            </h4>
            <span className="inputtitle">{user.bloodGroup}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPhysical;
