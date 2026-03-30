import logo from "../assets/raagulLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#technologies", label: "Technologies" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar sticky top-3 z-40 mb-14 w-full px-4 py-4 md:px-8" aria-label="Primary">
      <div className="flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="RG Logo" className="h-16 w-auto rounded-3xl" />
      </div>

      <div className="nav-links hidden items-center gap-8 text-lg md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-button hover:text-cyan-500">
            {item.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="rounded-lg border border-cyan-300/40 px-3 py-2 text-sm text-cyan-200 md:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      <div className="social-icons flex gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/raagul-gananathan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
          aria-label="Visit LinkedIn profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RaagulGananathan13"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
          aria-label="Visit GitHub profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/raaguluguluu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
          aria-label="Visit Instagram profile"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/RaagulGana"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-500"
          aria-label="Visit X profile"
        >
          <FaTwitter />
        </a>
      </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-nav-menu" className="mt-4 rounded-xl border border-cyan-300/20 bg-neutral-900/80 p-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-button rounded-md px-2 py-1 hover:bg-cyan-900/30"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
