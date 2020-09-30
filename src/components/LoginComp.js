import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dashboard from "./Dashboard";
// function textEntries(props) 
const Login = () => {
  const [isLoggedIn, toggleLogin] = useState(false);

  if(!isLoggedIn) {
return (
  <div>
    <Box 
    component="span" 
    m={30} 
    display="flex" 
    alignItems="center" 
    justifyContent="center" 
    flexDirection="column"
    >
    <TextField placeholder="Username" />
    <br/>
    <TextField placeholder="Password" />
    <br />
    <Button variant="contained" 
    onClick={() => toggleLogin(isLoggedIn ? false: true)} 
    color="secondary">
      Login
    </Button>
    </Box>
  </div>
  );
} else {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
};

export default Login;