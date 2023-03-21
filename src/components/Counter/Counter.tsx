import React, {Component} from "react";

export default class Counter extends Component {
    render(): React.ReactNode {
        return (
            <section className="mt-3.5 ml-4 flex flex-col gap-3">
                <div>
                    <h1>Counter : <span>0</span></h1>
                </div>

                <div className="text-white flex gap-3">
                    <button className="rounded bg-green-800 px-3 py-1.5">Increase</button>
                    <button className="rounded bg-red-700 px-3 py-1.5">Decrease</button>
                </div>
            </section>
        );
    }
}