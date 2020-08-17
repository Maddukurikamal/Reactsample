import React from "react";

function Dashboard(props) {
  // handle click event of logout button
  const handleLogout = () => {
    props.history.push("/login");
  };

  return (
    <div>
      Welcome User!
      <br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
// import React from "react";
// import { getUser, removeUserSession } from "./Common";

// function Dashboard(props) {
//   const user = getUser();

//   // handle click event of logout button
//   const handleLogout = () => {
//     removeUserSession();
//     props.history.push("/login");
//   };

//   return (
//     <div>
//       Welcome {user.getUser}!<br />
//       <br />
//       <input type="button" onClick={handleLogout} value="Logout" />
//     </div>
//   );
// }

// export default Dashboard;