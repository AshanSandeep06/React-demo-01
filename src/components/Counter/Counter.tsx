import React, {Component} from "react";

type counterProps = {}

type counterState = {
    count: number;
}

export default class Counter extends Component<counterProps, counterState> {
    constructor(props: counterProps){
        super(props);

        this.state = {
            count: 0
        };
    }

    render(): React.ReactNode {
        return (
            <section className="mt-3.5 ml-4 flex flex-col gap-3">
                <div className="flex gap-2.5">
                    <h1>Counter : </h1>
                    <span>0</span>
                </div>

                <div className="text-white flex gap-4">
                    <button className="rounded bg-green-800 px-3 py-1.5">Increase</button>
                    <button className="rounded bg-red-700 px-3 py-1.5">Decrease</button>
                </div>
            </section>
        );
    }
}