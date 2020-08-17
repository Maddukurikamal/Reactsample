import React, { useState, useEffect } from "react";

import axios from "axios";

// function Dashboard(props) {
// handle click event of logout button
// const handleLogout = () => {
//   props.history.push("/login");
// };

//   return (
//     // <div>
//     //   Welcome User!
//     //   <br />
//     //   <br />
//     //   <input type="button" onClick={handleLogout} value="Logout" />
//     // </div>
//   // );
// }

const Dashboard = (props) => {
  const handleLogout = () => {
    props.history.push("/login");
  };
  const url = "https://reqres.in/api/users";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((json) => setData(json.data.data));
  }, []);
  //console.log(data);
  const renderTable = () => {
    return Object.keys(data).map((key, i) => {
      //console.log(users)
      return (
        <tr key={i}>
          <td>
            <center>{data[key].id}</center>
          </td>
          <td>
            <center>{data[key].email}</center>
          </td>
          <td>
            <center>{data[key].first_name}</center>
          </td>
          <td>
            <center>{data[key].last_name}</center>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      Welcome User !
      <br />
      <br />
      {<input type="button" onClick={handleLogout} value="Logout" />}
      <h1 id="title">Fecthed Details from the API</h1>
      <table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>
              <center>Email</center>
            </th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById("root"));
export default Dashboard;
