export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
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

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-slate-700 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-slate-700 hover:text-blue-600">
            Services
          </a>

          <a href="#" className="text-slate-700 hover:text-blue-600">
            Solutions
          </a>

          <a href="#" className="text-slate-700 hover:text-blue-600">
            Portfolio
          </a>

          <a href="#" className="text-slate-700 hover:text-blue-600">
            About
          </a>

          <a href="#" className="text-slate-700 hover:text-blue-600">
            Contact
          </a>
        </nav>

        <button className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
          Get Quote
        </button>
      </div>
    </header>
  );
}
