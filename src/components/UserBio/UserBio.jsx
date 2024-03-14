import React from "react";
import "./UserBio.css";
import Modal from "../Modal/Modal";
import {
  FaRegUser,
  FaMale,
  FaFemale,
  FaPhoneAlt,
  FaCity,
} from "react-icons/fa";
import {
  FaPersonArrowDownToLine,
  FaPersonArrowUpFromLine,
} from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiServerLine } from "react-icons/ri";
import {
  LiaMaleSolid,
  LiaFemaleSolid,
  LiaCitySolid,
  LiaBirthdayCakeSolid,
} from "react-icons/lia";
import moment from "moment";
import { FiPhone, FiUserPlus } from "react-icons/fi";
import { FiUserMinus } from "react-icons/fi";
import { ImEnlarge2 } from "react-icons/im";

const UserBio = ({ user, openModal, setOpenModal }) => {
  return (
    <>
      <div>
        <h2 className="headingtitle">
          User detail of {user.firstName}&nbsp;{user.lastName}
        </h2>
      </div>
      {/* Bio content */}
      <div>
        <div className="singleusergrid">
          {/* 1st grid */}
          <div className="imagelarge">
            <div className="imagegrid">
              <div>
                <img src={user.image} className="image" alt="" />
              </div>
              <div>
                <ImEnlarge2
                  title="View on Full Screen"
                  className="clipboard"
                  onClick={() => setOpenModal(!openModal)}
                />
              </div>
            </div>
          </div>
          {openModal && (
            <div>
              <Modal user={user} setOpenModal={setOpenModal} />
            </div>
          )}
          {/* 2nd grid */}
          <div className="inputslayout">
            <div className="boxes">
              <h4 className="labeltitle flex">
                <FaRegUser className="singleusericon" /> Firstname
              </h4>
              <span className="inputtitle">{user.firstName}</span>
            </div>
            <div className="boxes">
              <h4 className="labeltitle flex">
                <FaRegUser className="singleusericon" />
                Lastname
              </h4>
              <span className="inputtitle">{user.lastName}</span>
            </div>
            <div className="boxes">
              <h4 className="labeltitle flex">
                <FaRegUser className="singleusericon" />
                Maidenname
              </h4>
              <span className="inputtitle">{user.maidenName}</span>
            </div>
            <div className="boxes">
              <h4 className="labeltitle flex">
                {" "}
                {user.gender === "male" ? (
                  <LiaMaleSolid className="singleusericon" />
                ) : (
                  <LiaFemaleSolid className="singleusericon" />
                )}
                Gender
              </h4>
              <span className="inputtitle">{user.gender}</span>
            </div>

            <div className="boxes">
              <h4 className="labeltitle flex">
                {user.gender < 21 ? (
                  <FiUserMinus className="singleusericon" />
                ) : (
                  <FiUserPlus className="singleusericon" />
                )}
                Age
              </h4>
              <span className="inputtitle">{user.age}</span>
            </div>
            <div className="boxes">
              <h4 className="labeltitle flex">
                <LiaBirthdayCakeSolid className="singleusericon" />
                DOB
              </h4>
              <span className="inputtitle">
                {moment(user.birthDate).format("MMMM Do YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBio;
