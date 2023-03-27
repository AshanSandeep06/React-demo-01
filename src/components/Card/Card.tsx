import React, { Component } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default class Card extends Component {
  render() {
    return (
      <div className="border border-gray-600 text-center px-4 pb-5 pt-3">
        <div className="flex flex-col items-center gap-2">
          <AcUnitIcon />

          <h3 className="text-center text-2xl font-medium font-ubuntu mb-2">
            Card 1
          </h3>
        </div>

        <div className="flex justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit,
            facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi
            mollitia aut ullam dolores tempora quos veritatis quasi aliquid
            libero ea.
          </p>
        </div>
      </div>
    );
  }
}
