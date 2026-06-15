import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import {
  useEffect,
  useState,
  useRef,
} from "react";

import logo from "../../assets/logos/vaultmind-logo-horizontal.png";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Solutions", path: "/solutions" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const drawerRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);

    setTimeout(() => {
      if (drawerRef.current) {
        drawerRef.current.scrollTop = 0;
      }
    }, 300);
  };

  return (
    <>
      {/* BACKDROP */}

      <div
        onClick={closeMobileMenu}
        className={`
          fixed
          inset-0
          z-40
          bg-black/40
          backdrop-blur-sm
          transition-all
          duration-300
          lg:hidden

          ${
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-4 pt-3">

          {/* NAVBAR */}

          <div
            className={`
              w-full
              rounded-[28px]
              transition-all
              duration-500

              ${
                scrolled
                  ? `
                    border
                    border-slate-200/80
                    bg-white/90
                    backdrop-blur-xl
                    shadow-[0_20px_50px_rgba(37,99,235,0.45)]
                  `
                  : `
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-md
                  `
              }
            `}
          >
            <div className="flex h-[84px] items-center justify-between px-6 lg:px-10">

              {/* LOGO */}

              <NavLink
                to="/"
                className="flex items-center"
              >
                <img
                  src={logo}
                  alt="VaultMind Solutions"
                  className="h-14 w-auto object-contain"
                />
              </NavLink>

              {/* DESKTOP NAV */}

              <nav className="hidden lg:flex items-center gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      group
                      relative
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        scrolled
                          ? isActive
                            ? "text-blue-600"
                            : "text-slate-700 hover:text-blue-600"
                          : isActive
                          ? "text-cyan-300"
                          : "text-white hover:text-cyan-300"
                      }
                    `
                    }
                  >
                    {item.label}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        h-[2px]
                        w-0
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        transition-all
                        duration-300
                        group-hover:w-8
                      "
                    />
                  </NavLink>
                ))}
              </nav>

              {/* RIGHT SIDE */}

              <div className="flex items-center gap-4">

                <ThemeSwitcher
                  scrolled={scrolled}
                />

                <button
                  className="
                    hidden
                    md:flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#1E6BFF]
                    to-[#11B5FF]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:shadow-xl
                  "
                >
                  Book Strategy Call

                  <ChevronDown size={16} />
                </button>

                {/* MOBILE BUTTON */}

                <button
                  onClick={() => {
                    if (mobileMenuOpen) {
                      closeMobileMenu();
                    } else {
                      setMobileMenuOpen(true);
                    }
                  }}
                  className={`
                    flex
                    lg:hidden
                    items-center
                    justify-center
                    rounded-xl
                    p-3
                    transition-all

                    ${
                      scrolled
                        ? `
                          border
                          border-slate-200
                          bg-white
                          text-slate-700
                        `
                        : `
                          border
                          border-white/20
                          bg-white/10
                          text-white
                          backdrop-blur-md
                        `
                    }
                  `}
                >
                  {mobileMenuOpen ? (
                    <X size={20} />
                  ) : (
                    <Menu size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* MOBILE DRAWER */}

            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                lg:hidden

                ${
                  mobileMenuOpen
                    ? "max-h-[calc(100vh-84px)]"
                    : "max-h-0"
                }
              `}
            >
              <div
                ref={drawerRef}
                className="
                  border-t
                  border-white/10
                  bg-white/5
                  px-6
                  py-5
                  backdrop-blur-xl
                  overflow-y-auto
                  max-h-[calc(100vh-120px)]
                "
              >
                <nav className="flex flex-col gap-2">

                  {navItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`
                        rounded-2xl
                        px-4
                        py-4
                        font-medium
                        transition-all

                        ${
                          scrolled
                            ? `
                              text-slate-700
                              hover:bg-slate-100
                            `
                            : `
                              text-white
                              hover:bg-white/10
                            `
                        }
                      `}
                    >
                      {item.label}
                    </NavLink>
                  ))}

                  <button
                    className="
                      mt-4
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#1E6BFF]
                      to-[#11B5FF]
                      px-5
                      py-4
                      font-semibold
                      text-white
                      shadow-lg
                    "
                  >
                    Book Strategy Call

                    <ChevronDown size={16} />
                  </button>

                </nav>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
