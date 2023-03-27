import { Button, TextField } from "@mui/material";
import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="px-12 pt-[18px] pb-10 flex flex-col gap-y-4">
        <div className="mt-2 mb-3">
          <h1 className="text-center text-2xl font-semibold font-poppins">
            Contact Us
          </h1>
        </div>

        <div className="mb-6 flex justify-center px-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            excepturi alias repellendus temporibus tempora explicabo, ducimus
            nisi animi voluptas atque rerum nam odit aut. Voluptate facere
            placeat libero molestiae nostrum!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias excepturi alias repellendus
            temporibus tempora explicabo, ducimus nisi animi voluptas atque
            rerum nam odit aut. Voluptate facere placeat libero molestiae
            nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias excepturi alias repellendus temporibus tempora explicabo,
            ducimus nisi animi voluptas atque rerum nam odit aut. Voluptate
            facere placeat libero molestiae nostrum!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias excepturi alias repellendus
            temporibus tempora explicabo, ducimus nisi animi voluptas atque
            rerum nam odit aut. Voluptate facere placeat libero molestiae
            nostrum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias excepturi alias repellendus temporibus tempora explicabo,
            ducimus nisi animi voluptas atque rerum nam odit aut. Voluptate
            facere placeat libero molestiae nostrum!
          </p>
        </div>

        <div className="mt-3">
          <form className="w-full py-8 px-32 flex flex-col gap-3 items-center">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter your valid Email here"
              fullWidth={true}
              required
            />
            <TextField
              label="Message"
              type="text"
              variant="outlined"
              placeholder="Enter your Message here"
              fullWidth={true}
              multiline
              minRows={5}
              maxRows={Infinity}
              required
            />
            <button className="mt-2 w-1/6 bg-blue-900 text-white py-2 rounded">
              <h6>Submit</h6>
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
