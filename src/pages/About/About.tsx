import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="px-12 pt-[18px] pb-10 flex flex-col gap-y-4">
        <div>
          <h1>About Us</h1>
        </div>

        <div>
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
            nostrum!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="border border-gray-600 text-center px-4 pb-5 pt-3">
            <div>
              <h3 className="text-center text-xl font-medium font-ubuntu mb-2">
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

          <div className="border border-gray-600 text-center px-4 pb-5 pt-3">
            <div>
              <h3 className="text-center text-xl font-medium font-ubuntu mb-2">
                Card 2
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
