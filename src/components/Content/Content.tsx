import {Route, Routes} from "react-router-dom";

export default function Content() {
    return (
        <section id="content">
            <Routes>
                <Route path="/"></Route>
                <Route path="/About"></Route>
                <Route path="/Services"></Route>
                <Route path="/Projects"></Route>
                <Route path="/Contact"></Route>
            </Routes>
        </section>
    );
}