import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  //https://dummyjson.com/users

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/user/:id" element={<SingleUserPage />} />
          <Route path="/user-statistics" element={<StatisticsPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// 1) Using this api: https://dummyjson.com/users create a React App that shows the list of all the users in a tabular way
// 2) When clicking on a single user the app should show the detials of each sinlòge user (use appropriate icons and look and feel)
// 3) Build another page that shows general statistics of the users charatteristics
// 4) Send us the URL where we can see your work

/*
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

        <tbody>
          {userData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.firstName.toLowerCase().includes(search) ||
                    item.lastName.toLowerCase().includes(search) ||
                    item.email.toLowerCase().includes(search);
            })
            .map((user) => (
              <tr key={user.id}>
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
                    <RxExternalLink />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
*/
