import React, { Component } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

class About extends Component {
  render() {
    return (
      <section className="px-12 pt-[18px] pb-10 flex flex-col gap-y-4">
        <div className="mt-2 mb-3">
          <h1 className="text-center font-bold text-2xl font-poppins">
            About Us
          </h1>
        </div>

        <div className="mb-6 flex justify-center">
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            excepturi alias repellendus temporibus tempora explicabo, ducimus
            nisi animi voluptas atque rerum nam odit aut. Voluptate facere
            placeat libero molestiae nostrum!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="border border-gray-600 text-center px-4 pb-5 pt-3">
            <div className="flex flex-col items-center gap-2">
              <AcUnitIcon />

              <h3 className="text-center text-2xl font-medium font-ubuntu mb-2">
                Card 1
              </h3>
            </div>

            <div className="flex justify-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                velit, facilis quaerat accusamus tenetur laborum ipsam nemo
                doloribus sequi mollitia aut ullam dolores tempora quos
                veritatis quasi aliquid libero ea.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
