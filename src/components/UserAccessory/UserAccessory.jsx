import React from "react";
import "./UserAccessory.css";
import { BiDetail } from "react-icons/bi";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import { TbDeviceImacCheck } from "react-icons/tb";
import { FaServer, FaUserShield } from "react-icons/fa6";
import { GrDomain } from "react-icons/gr";
import { MdEnhancedEncryption } from "react-icons/md";

const UserAccessory = ({ user }) => {
  return (
    <section className="useraccessory-section">
      <div>
      <h2 className="headingtitle flex">
          <BiDetail className="singleusericon" />
          User Accessory Specification
        </h2>
      </div>
      <div className="useraccessorylayout">
        <div className="boxes">
          <h4 className="labeltitle flex">
            <IoIosLogIn className="singleusericon" />
            Login
          </h4>
          <span className="inputtitle lowercase">{user.username}</span>
        </div>
        <div className="boxes">
          <h4 className="labeltitle flex">
            <MdOutlinePassword className="singleusericon" />
            Password
          </h4>
          <span className="inputtitle lowercase">{user.password}</span>
        </div>
        <div className="boxes">
          <h4 className="labeltitle flex">
            <TbDeviceImacCheck className="singleusericon" /> Mac address
          </h4>
          <span className="inputtitle">{user.macAddress}</span>
        </div>
        <div className="boxes">
          <h4 className="labeltitle flex">
            <FaServer className="singleusericon" /> IP
          </h4>
          <span className="inputtitle">{user.ip}</span>
        </div>
        <div className="boxes">
          <h4 className="labeltitle flex">
            <GrDomain className="singleusericon" /> Domain
          </h4>
          <span className="inputtitle lowercase">{user.domain}</span>
        </div>
        <div className="boxes">
          <h4 className="labeltitle flex">
            <FaUserShield className="singleusericon" /> EIN
          </h4>
          <span className="inputtitle">{user.ein}</span>
        </div>
        <div className="boxes">
          <h4 className="labeltitle flex">
            <MdEnhancedEncryption className="singleusericon" /> SSN
          </h4>
          <span className="inputtitle">{user.ssn}</span>
        </div>
      </div>
      {/* <div>
        <h4 className="title">Versions enabled with : {user.userAgent}</h4>
      </div> */}
    </section>
  );
};

export default UserAccessory;
