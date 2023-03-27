import { TextField } from "@mui/material";
import React, { Component } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <section className="h-full">
        <form className="w-full h-full py-8 px-32 flex flex-col gap-3 items-center justify-center">
          <div className="pt-5 w-1/2 px-16 flex flex-col gap-4 items-center shadow-xl h-[300px] rounded-xl">
            <h1>Login Form</h1>

            <TextField
              label="Username"
              type="text"
              variant="outlined"
              placeholder="Enter your Username here"
              fullWidth={true}
              required={true}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              placeholder="Enter your Password here"
              fullWidth={true}
              required={true}
            />

            <Link to={"/"}>
            <button className="mt-2 bg-blue-900 text-white py-2 px-6 rounded">
              Login <LoginIcon className="pl-1" />
            </button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}
