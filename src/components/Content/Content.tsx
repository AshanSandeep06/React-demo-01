import { Route, Routes } from "react-router-dom";
import "./Content.css";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import Services from "../../pages/Services";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";

export default function Content() {
  return (
    <>
      <section id="content" className="mt-20">
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </section>
    </>
  );
}
