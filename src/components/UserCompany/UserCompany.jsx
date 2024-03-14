import React from "react";
import "./UserCompany.css";
import { ImUserTie } from "react-icons/im";
import { FaBuildingUser } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdComputer, MdLocationCity } from "react-icons/md";
import { LiaCitySolid } from "react-icons/lia";
import { IoCodeSlashOutline, IoLocationOutline } from "react-icons/io5";
import { PiSignpostLight } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";

const UserCompany = ({ user }) => {
  return (
    <section className="userjob-section">
      <div>
        <h2 className="headingtitle flex">
          <ImUserTie />
          User's Company
        </h2>
      </div>
      <div className="companylayoutcontent">
        <div className="companydetailbox">
          <div className="companycontent">
            <h3 className="flex">
              <LiaCitySolid />
              Company Name
            </h3>
            <span>{user.company.name}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <MdComputer />
              Department
            </h3>
            <span>{user.company.department}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <IoCodeSlashOutline />
              Title
            </h3>
            <span>{user.company.title}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <IoLocationOutline />
              Address
            </h3>
            <span>{user.address.address}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <LiaCitySolid />
              City
            </h3>
            <span>{user.company.address.city}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <PiSignpostLight />
              Postal Code
            </h3>
            <span>{user.company.address.postalCode}</span>
          </div>

          <div className="companycontent">
            <h3 className="flex">
              <BsBuildings />
              State
            </h3>
            <span>{user.company.address.state}</span>
          </div>

          {/* <div>
            <h3>department</h3>
          </div>
          <div>
            <span>{user.company.department}</span>
          </div>

          <div>
            <h3>title</h3>
          </div>
          <div>
            <span>{user.company.title}</span>
          </div>

          <div>
            <h3>Address</h3>
          </div>
          <div>
            <span>{user.company.address.address}</span>
          </div>

          <div>
            <h3>City</h3>
          </div>
          <div>
            <span>{user.company.address.city}</span>
          </div>

          <div>
            <h3>Coordinates</h3>
          </div>
          <div className="cooridnatesbox">
            <span>{user.company.address.coordinates.lat}&nbsp;Latitude</span>
            <span> {user.company.address.coordinates.lng}&nbsp;Longitude</span>
          </div>
          <div>
            <h3>Postal Code</h3>
          </div>
          <div>
            <span>{user.company.address.postalCode}</span>
          </div>
          <div>
            <h3>State</h3>
          </div>
          <div>
            <span>{user.company.address.state}</span>
          </div> */}
        </div>

        <div className="imagecenter">
          <FaBuildingUser className="companyicon" />
        </div>
      </div>
    </section>
  );
};

export default UserCompany;
