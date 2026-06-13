import { Menu, ChevronDown } from "lucide-react";
import logo from "../../assets/logos/vaultmind-logo-horizontal.png";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  "Home",
  "Services",
  "Solutions",
  "Portfolio",
  "About",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div
          className="
          h-[84px]
          rounded-3xl
          border
          border-slate-200/80
          bg-white/85
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        "
        >
          <div className="flex h-full items-center justify-between px-8">
            
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="VaultMind Solutions"
                className="h-48 w-auto"
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                  group
                  relative
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-blue-600
                "
                >
                  {item}

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
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher />

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
                hover:shadow-xl
              "
              >
                Get Free Consultation
                <ChevronDown size={16} />
              </button>

              <button
                className="
                flex
                lg:hidden
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                p-3
              "
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
