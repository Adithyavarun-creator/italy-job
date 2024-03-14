import React from "react";
import "./UserLocation.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegAddressCard, FaCity } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { BsSignpost } from "react-icons/bs";
import { SlUserFemale } from "react-icons/sl";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import Maps from "../Maps/Maps";

const UserLocation = ({ user }) => {
  return (
    <section className="userlocation-section">
      <div>
        <h2 className="headingtitle flex">
          <FaLocationDot />
          User Location Details
        </h2>
      </div>
      <div className="locationlayoutcontent">
        <div className="locationlayout">
          <div className="boxes">
            <h4 className="labeltitle flex">
              <FaRegAddressCard className="singleusericon" />
              Address
            </h4>
            <span className="inputtitle">{user.address.address}</span>
          </div>
          <div className="boxes">
            <h4 className="labeltitle flex">
              <FaCity className="singleusericon" />
              City
            </h4>
            <span className="inputtitle">{user.address.city}</span>
          </div>

          <div className="boxes">
            <h4 className="labeltitle flex">
              <BsSignpost className="singleusericon" />
              Postal Code
            </h4>
            <span className="inputtitle">{user.address.postalCode}</span>
          </div>
          <div className="boxes">
            <h4 className="labeltitle flex">
              <SlUserFemale className="singleusericon" />
              State
            </h4>
            <span className="inputtitle">{user.address.state}</span>
          </div>
        </div>
        <div className="leaflet-container">
          <Maps user={user} />
        </div>
      </div>
    </section>
  );
};

export default UserLocation;
