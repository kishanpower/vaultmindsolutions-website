import { ArrowRight } from "lucide-react";
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
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-slate-200/60
      bg-white/80
      backdrop-blur-xl
    "
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="group flex items-center gap-3 cursor-pointer">
            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-cyan-500
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              group-hover:scale-105
            "
            >
              VM
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                VaultMind Solutions
              </h2>

              <p className="text-xs text-slate-500">
                Secure Ideas. Intelligent Solutions.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="
                group
                relative
                rounded-xl
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
                transition-all
                duration-300
                hover:bg-slate-50
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
              group
              hidden
              md:flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-5
              py-3
              font-medium
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
            "
            >
              Get Quote

              <ArrowRight
                size={18}
                className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
