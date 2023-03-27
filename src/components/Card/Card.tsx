import React, { Component } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type CardDetails = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
};

type CardProps = {};

type CardState = {
  cardList: CardDetails[];
};

export default class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      cardList: [
        {
          id: "1",
          title: "Card 1",
          icon: <AcUnitIcon />,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit, facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi mollitia aut ullam dolores tempora quos veritatis quasi aliquid libero ea.",
        },

        {
          id: "2",
          title: "Card 2",
          icon: <AddAlertIcon />,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit, facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi mollitia aut ullam dolores tempora quos veritatis quasi aliquid libero ea.",
        },

        {
          id: "3",
          title: "Card 3",
          icon: <AddCircleIcon />,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit, facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi mollitia aut ullam dolores tempora quos veritatis quasi aliquid libero ea.",
        },

        {
          id: "4",
          title: "Card 4",
          icon: <CheckCircleIcon />,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit, facilis quaerat accusamus tenetur laborum ipsam nemo doloribus sequi mollitia aut ullam dolores tempora quos veritatis quasi aliquid libero ea.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {this.state.cardList.map((card) => (
          <div key={card.id} className="border border-gray-600 text-center px-4 pb-5 pt-3">
            <div className="flex flex-col items-center gap-2">
              {card.icon}

              <h3 className="text-center text-2xl font-medium font-ubuntu mb-2">
                {card.title}
              </h3>
            </div>

            <div className="flex justify-center">
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
