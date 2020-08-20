import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
//import { render } from "@testing-library/react";
function Dashboard() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  //const data = [post];
  const url = "https://reqres.in/api/users?page=" + id;
  const handleclick = () => {
    setId(id + 1);
  };
  const handleback = () => {
    setId(id - 1);
  };

  const Fetchdetails = (props) => {
    props.history.push("/list-of-users" + setId(id));
  };
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <h5 className="header-style">User Details</h5>
      {post.map((data) => (
        <div classname="card" onClick={Fetchdetails} key={data.id}>
          <div className="card">
            <div className="card-body">
              <center>
                <div className="card-text">
                  {data.first_name} {data.last_name}
                </div>
              </center>

              <div className="card-text">
                <center>
                  <img src={data.avatar}></img>
                </center>
              </div>
            </div>
          </div>
        </div>
      ))}

      {
        <button type="button-model" onClick={handleclick}>
          NEXT
        </button>
      }
      {
        <button classname="button-model" type="button" onClick={handleback}>
          PREVIOUS
        </button>
      }
    </div>
  );
}
export default Dashboard;
