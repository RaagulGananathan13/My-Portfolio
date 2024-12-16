import logo from "../assets/raagulLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar w-full mb-20 flex items-center justify-between py-6 px-8">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="RG Logo" className="h-16 w-auto rounded-3xl" />
      </div>
      <div className="nav-links hidden md:flex items-center gap-8 text-lg">
        {/* Anchor Links for Scrolling */}
        <a href="#about" className="nav-button hover:text-cyan-500">About</a>
        <a href="#technologies" className="nav-button hover:text-cyan-500">Technologies</a>
        <a href="#experience" className="nav-button hover:text-cyan-500">Experience</a>
        <a href="#projects" className="nav-button hover:text-cyan-500">Projects</a>
        <a href="#contact" className="nav-button hover:text-cyan-500">Contact</a>
      </div>
      <div className="social-icons flex gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/raagul-gananathan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RaagulGananathan13"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/raaguluguluu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/RaagulGana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
