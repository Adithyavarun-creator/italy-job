import React, { useEffect, useState } from "react";
import "./UserTable.css";
import axios from "axios";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { allUsers } from "../../baseUrl/baseUrl";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const results = await axios.get(allUsers);
      const data = results.data;
      console.log(data);
      setUserData(data.users);
    };

    fetchUsers();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>User Data Table</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="usertable-section">
        <div>
          <h2>Totally {userData.length} user details registered at Italy</h2>
        </div>

        <div>
          <input
            className="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="&#128269; Search Fistname / Lastname / Email address"
          />
        </div>

        {/* Table part */}

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Email</th>
              <th>Detailed View</th>
            </tr>
          </thead>

          {userData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.firstName.toLowerCase().includes(search) ||
                    item.lastName.toLowerCase().includes(search) ||
                    item.email.toLowerCase().includes(search);
            })
            .map((user) => (
              <tbody key={user.id}>
                <tr>
                  <td>{user.id}.</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/user/${user.id}`}
                      target="_blank"
                      className="linkStyle"
                    >
                      <RxExternalLink className="icon" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </section>
    </HelmetProvider>
  );
};

export default UserTable;
