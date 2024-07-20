import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/icon.png";

const Header = () => {
    return (
        <div className="border-b-2 border-b-green-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-bold tracking-tight text-green-500">
                    <img src={logo} alt="BiteBuddy" className="w-20 h-20 inline-block" />
                    BiteBuddy.com
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </div>
        </div>
    )
}

export default Header;