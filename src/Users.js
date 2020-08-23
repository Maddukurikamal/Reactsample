import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import { useParams } from "react-router-dom";
import { render } from "@testing-library/react";
function Users() {
  const [post, setPost] = useState([]);
  const [ad, setad] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/" + id)
      .then((res) => {
        console.log(res);
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/" + id)
      .then((res) => {
        console.log(res);
        setad(res.data.ad);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  render();
  {
    return (
      <div>
        <div>
          <img className="imagefont" src={post.avatar} />
        </div>
        <div className="email">
          <h2>
            <center>NAME: {post.first_name}</center>
          </h2>
        </div>
        <div className="email">
          <h2>
            <center>Email: {post.email}</center>
          </h2>
        </div>
        <h2>
          {" "}
          <div className="email">ABOUT: {ad.text}</div>
        </h2>
      </div>
    );
  }
  //   if (post.data) {
  //     return <div>{post.email}</div>;

  //   return (
  //     // <div>
  //     //   <h5 className="header-style">User Details</h5>
  //     //   {post.map((data) => (
  //     //     <div className="card">
  //     //       <div className="card-body">
  //     //         <center>
  //     //           <div className="card-text">
  //     //             {data.first_name} {data.last_name}
  //     //           </div>
  //     //         </center>

  //     //         <div className="card-text">
  //     //           <center>
  //     //             <img src={data.avatar}></img>
  //     //           </center>
  //     //         </div>
  //     //       </div>
  //     //     </div>
  //     //   ))}
  //     // </div>
  //     // <div>
  //     //   {post.map((data) => (
  //     //     <div> {data.email}</div>
  //     //   ))}
  //     // </div>
  //     <div>{post.email}</div>
  //   );
  // }
}
export default Users;
