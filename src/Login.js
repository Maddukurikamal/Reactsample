import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    if (email === "admin@gmail.com" && password === "admin") {
      //console.log("12");
      event.preventDefault();
      props.history.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="login-div">
      <form onSubmit={handleSubmit}>
        <div className="key-box"> Email :</div>
        <FormControl
          className="value-box"
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormGroup controlId="password" bsSize="large">
          <div className="key-box">Password :</div>
          <FormControl
            className="value-box"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <div className="button-box">
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
          <form onSubmit={handleSubmit}></form>
          {/* <div className="error-message">
            <FormControl
              value={error}
              onChange={(e) => setError(e.target.value)}
            />
          </div> */}
        </div>
      </form>
    </div>
  );
}
