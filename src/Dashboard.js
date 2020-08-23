import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";

export function Dashboard(props) {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const url = "https://reqres.in/api/users?page=" + id;
  const handlenext = () => {
    if (id >= 2) {
      alert("No data");
    } else {
      setId(id + 1);
    }
  };
  const handleback = () => {
    if (id <= 1) {
      alert("404: No data found");
    } else {
      setId(id - 1);
    }
  };
  const Fetchdetails = (id) => {
    console.log(id);
    props.history.push("/dashboard/" + id);
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
      <header>
        <h1>USER DETAILS</h1>
      </header>
      {post.map((data) => (
        <div classname="card" onClick={() => Fetchdetails(data.id)}>
          <div className="card">
            <div className="card-body">
              <div className="card-text">
                <h1>
                  {data.first_name} {data.last_name}
                </h1>
              </div>

              <img className="imagefont1" src={data.avatar}></img>
            </div>
          </div>
        </div>
      ))}

      {
        <button type="button" onClick={handlenext}>
          NEXT
        </button>
      }
      {
        <button type="button" onClick={handleback}>
          PREVIOUS
        </button>
      }
    </div>
  );
}
export default Dashboard;
