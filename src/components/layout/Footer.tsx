import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>
            <h3
              className="
                text-2xl
                font-bold
                bg-gradient-to-r
                from-white
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              VaultMind Solutions
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              We help businesses accelerate growth
              through custom software, intelligent
              automation and AI-powered solutions.
            </p>
          </div>

          {/* Services */}

          <div>
            <h4 className="font-semibold text-white">
              Services
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>Custom Software Development</li>
              <li>AI Solutions</li>
              <li>Business Automation</li>
              <li>Web Applications</li>
              <li>Desktop Applications</li>
            </ul>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">

              <li>
                <NavLink
                  to="/"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solutions"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Solutions
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/portfolio"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-semibold text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="mt-1 text-cyan-400"
                />

                <span className="text-slate-400">
                  info@vaultmindsolutions.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-cyan-400"
                />

                <span className="text-slate-400">
                  India
                </span>
              </div>

            </div>

            <button
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-5
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Contact Us

              <ArrowUpRight size={18} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-slate-800
            pt-8
            text-sm
            text-slate-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 VaultMind Solutions.
            All rights reserved.
          </p>

          <p>
            Secure Ideas. Intelligent Solutions.
          </p>
        </div>

      </div>
    </footer>
  );
}
