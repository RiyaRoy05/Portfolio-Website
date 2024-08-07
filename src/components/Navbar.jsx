import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-12" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/riya-roy-419005280" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    <a href="https://www.github.com/RiyaRoy05" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </div>
  </nav>
}

export default Navbar;