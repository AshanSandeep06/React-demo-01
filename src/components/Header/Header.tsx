import UserImage from "../../assets/UserImage.png";

export default function Header() {
    return (
        <section id="header" className="flex w-full h-20 bg-blue-900 text-white">
            <div className="w-1/2 h-full border border-4 border-red-800 flex items-center gap-2 pl-2">
                <img src={UserImage} alt="UserImage" className="w-10 h-10"/>
                <h1 className="h-max">My Profile</h1>
            </div>

            <div className="w-1/2 h-full border border-4 border-black">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
        </section>
    );
}