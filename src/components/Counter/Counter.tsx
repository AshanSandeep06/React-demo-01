import React, {Component} from "react";

type counterProps = {}

type counterState = {
    count: number;
}

export default class Counter extends Component<counterProps, counterState> {
    constructor(props: counterProps) {
        super(props);

        this.state = {
            count: 0
        };

        // Binding Traditional(normal) functions to the Component
        this.increaseCount = this.increaseCount.bind(this);

        console.log("Counter - Constructor Called..!");
    }

    componentDidMount() {
        console.log("Counter - Component Mounted..");
    }

    componentDidUpdate() {
        console.log("Counter - Component Updated..");
    }

    componentWillUnmount() {
        console.log("Counter - Component Unmounted(Destroyed)..");
    }

    componentDidCatch(error:Error, errorInfo:React.ErrorInfo) {
        console.log("Counter - Component Did Catch..");
        console.log(error, errorInfo);
        console.log("------------------------------------------");
    }

    // Normal Functions / Traditional Functions
    increaseCount() {
        this.setState({count: this.state.count + 1});
    }

    // Arrow Functions
    // Arrow Functions should not be manually bind by us, Component will automatically bind the arrow functions itself
    decreaseCount = () => {
        this.setState({count: this.state.count - 1});
    }

    render(): React.ReactNode {
        return (
            <section className="mt-3.5 ml-4 flex flex-col gap-3">
                <div className="flex gap-2.5">
                    <h1>Counters : </h1>
                    <span>{this.state.count}</span>
                </div>

                <div className="text-white flex gap-4">
                    <button disabled={this.state.count === 10}
                            onClick={this.increaseCount}
                            className="rounded border border-green-800 text-green-800 px-3 py-1.5 hover:bg-green-800 hover:text-white">Increase
                    </button>
                    <button disabled={this.state.count === 0}
                            onClick={this.decreaseCount}
                            className="rounded border border-red-800 text-red-800 px-3 py-1.5 hover:bg-red-800 hover:text-white">Decrease
                    </button>
                </div>
            </section>
        );
    }
}