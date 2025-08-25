import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Products", href: "#products" },
    // { name: "FAQ", href: "#faq" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-base-100">
    <div className="container bg-base-100">
      <div className="flex items-center justify-between h-16">
        <a
          href="#home"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          Kinwits
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="py-2 text-sm text-base-content hover:text-primary"
            >
              {item.name}
            </a>
          ))}

          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <SunIcon className="swap-on w-5 h-5 text-yellow-500" />
            <MoonIcon className="swap-off w-5 h-5 text-yellow-400" />
          </label>

          <button className="px-6 py-2 text-sm text-white bg-gradient-to-r from-primary to-accent">
            Get Started
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <SunIcon className="swap-on w-5 h-5 text-yellow-500" />
            <MoonIcon className="swap-off w-5 h-5 text-yellow-400" />
          </label>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-secondary hover:text-primary"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>

    <div
      className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-base-100 shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col h-full px-6 py-4 space-y-6">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-end p-2 text-secondary hover:text-primary"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-base-content hover:text-primary"
          >
            {item.name}
          </a>
        ))}
        <div classname ="mt-auto flex justify-center">
        <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white">
          Get Started
        </button>
        </div>
      </div>
    </div>

    {isMenuOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setIsMenuOpen(false)}
      />
    )}
  </nav>

  );
}
