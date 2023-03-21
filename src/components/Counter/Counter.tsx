import React, {Component} from "react";

export default class Counter extends Component {
    render(): React.ReactNode {
        return (
            <section>
                <div>
                    <h1>Counter : <span>0</span></h1>
                </div>

                <div>
                    <button>Increase</button>
                    <button>Decrease</button>
                </div>
            </section>
        );
    }
}