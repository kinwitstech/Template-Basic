import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-base-100 backdrop-blur-md">
      <div className="container bg-base-100">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
          >
            Kinwits
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-base-content hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* DaisyUI Theme Toggle with Heroicons */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <SunIcon className="swap-on w-5 h-5 text-yellow-500" />
              <MoonIcon className="swap-off w-5 h-5 text-yellow-400" />
            </label>

            <button className="px-6 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
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
              className="p-2 text-secondary hover:text-primary hover:cursor-pointer"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center px-2 pt-4 pb-6 space-y-3 bg-base-100">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-base font-medium text-base-content hover:text-primary hover:cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <button className="mt-2 px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-primary/90 to-accent/90 hover:cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
