import React, { useState, useEffect } from "react";
import "./SingleUserPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { singleUser } from "../../baseUrl/baseUrl";
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
import UserPhysical from "../../components/UserPhysical/UserPhysical";
import UserLocation from "../../components/UserLocation/UserLocation";
import UserStudies from "../../components/UserStudies/UserStudies";
import UserAccessory from "../../components/UserAccessory/UserAccessory";
import Maps from "../../components/Maps/Maps";
import UserExperience from "../../components/UserCompany/UserCompany";
import UserBank from "../../components/UserBank/UserBank";
import UserCompany from "../../components/UserCompany/UserCompany";
import Modal from "../../components/Modal/Modal";
import UserBio from "../../components/UserBio/UserBio";
import UserContact from "../../components/UserContact/UserContact";

const SingleUserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [openModal, setOpenModal] = useState(false);

  // console.log(id);

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(singleUser(id));
      const data = user.data;
      // console.log(data);
      setUser(data);
    };

    // setTimeout(() => {
    //   getUser();
    // }, 2000);
    getUser();
  }, [id]);

  if (!user.id) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {user.firstName} {user.lastName} Profile
        </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="singleuser-section">
        {/* keep id no and name */}
        <div className="userbox">
          <UserBio
            user={user}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>

        <div className="userbox">
          <UserPhysical user={user} />
        </div>

        <div className="userbox">
          <UserLocation user={user} />
        </div>

        <div className="userbox">
          <UserStudies user={user} />
        </div>
        <div className="userbox">
          <UserAccessory user={user} />
        </div>
        <div className="userbox">
          <UserCompany user={user} />
        </div>
        <div className="userbox">
          <UserContact user={user} />
        </div>
        <div className="userbox">
          <UserBank user={user} />
        </div>
      </section>
    </HelmetProvider>
  );
};

export default SingleUserPage;
