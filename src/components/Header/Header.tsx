import {Link} from "react-router-dom";
import UserImage from "../../assets/UserImage.png";

export default function Header() {
    const activeLink = "border-b-2";

    return (
        <section id="header" className="flex w-full h-20 bg-blue-800 shadow-lg shadow-black/20 text-white fixed">
            <div className="w-1/2 h-full flex items-center gap-2.5 pl-2">
                <img src={UserImage} alt="UserImage" className="w-10 h-10"/>
                <h1 className="h-max">My Profile</h1>
            </div>

            <div className="w-1/2 h-full pr-5">
                <ul className="h-full flex items-center justify-end gap-[60px]">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/About"}>About</Link>
                    <Link to={"/Services"}>Services</Link>
                    <Link to={"/Projects"}>Projects</Link>
                    <Link to={"/Contact"}>Contact</Link>
                </ul>
            </div>
        </section>
    );
}