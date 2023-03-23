import UserImage from "../../assets/UserImage.png";

export default function Header() {
    return (
        <section id="header" className="flex w-full h-20 bg-blue-900 text-white">
            <div className="w-1/2 h-full flex items-center gap-2.5 pl-2">
                <img src={UserImage} alt="UserImage" className="w-10 h-10"/>
                <h1 className="h-max">My Profile</h1>
            </div>

            <div className="w-1/2 h-full pr-5">
                <ul className="h-full flex items-center justify-end gap-[60px]">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </section>
    );
}