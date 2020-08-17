// import React, { useState } from "react";

// function Login(props) {
//   const username = useFormInput("");
//   const password = useFormInput("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // handle button click of login form
//   const handleLogin = () => {
//     props.history.push("/dashboard");
//   };

//   return (
//     <div>
//       Login
//       <br />
//       <br />
//       <div>
//         Username
//         <br />
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password
//         <br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && (
//         <>
//           <small style={{ color: "red" }}>{error}</small>
//           <br />
//         </>
//       )}
//       <br />
//       <input
//         type="button"
//         value={loading ? "Loading..." : "Login"}
//         onClick={handleLogin}
//         disabled={loading}
//       />
//       <br />
//     </div>
//   );
// }

// const useFormInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   return {
//     value,
//     onChange: handleChange,
//   };
// };
import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email </ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
// export default Login;
