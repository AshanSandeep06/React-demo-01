import { TextField } from "@mui/material";
import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <section>
        <form className="w-full py-8 px-32 flex flex-col gap-3 items-center">
          <div className="w-full px-16 flex flex-col gap-4 items-center">
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

            <button className="mt-2 w-1/6 bg-blue-900 text-white py-2 rounded">
              <h6>Login</h6>
            </button>
          </div>
        </form>
      </section>
    );
  }
}
