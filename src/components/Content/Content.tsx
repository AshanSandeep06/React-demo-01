import { Route, Routes } from "react-router-dom";
import "./Content.css";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import Services from "../../pages/Services";

export default function Content() {
  return (
    <>
      <section id="content" className="mt-20 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </section>
    </>
  );
}
