import { Link, useLocation } from "react-router";
import { useState } from "react";

export function Nav() {
  const location = useLocation();
  const isDocsPage = location.pathname === "/docs";
  const isHomePage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-5 top-0 z-50">
      <div className="flex gap-3 items-center">
        <Link to="/" className="shrink-0">
          <img src="/logo.png" alt="Starliner" className="h-6 shrink-0 rounded-md" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center ml-auto shrink-0">
          <Link to="/" className={`text-[0.9rem] no-underline ${isHomePage ? "text-blue-10" : "text-tx hover:text-blue-10 transition-colors"}`}>Home</Link>
          <span className="text-border px-3 select-none">|</span>
          <Link to="/docs" className={`text-[0.9rem] no-underline ${isDocsPage ? "text-blue-10" : "text-tx hover:text-blue-10 transition-colors"}`}>Docs</Link>
          <span className="text-border px-3 select-none">|</span>
          <a href="https://starliner.app" target="_blank" className="text-tx text-[0.9rem] no-underline hover:text-blue-10 transition-colors">Get started</a>
          <span className="text-border px-3 select-none">|</span>
          <a href="mailto:mail@starliner.dev" className="bg-violet-10 text-white cursor-pointer py-[0.25rem] rounded px-4 text-[0.9rem] font-semibold no-underline hover:opacity-90 transition-opacity inline-flex items-center">Get in touch</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden ml-auto p-2 text-tx cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-3 pt-4 pb-2 pl-2 border-b border-border">
          <Link to="/" onClick={() => setMenuOpen(false)} className={`text-[0.9rem] no-underline ${isHomePage ? "text-blue-10" : "text-tx hover:text-blue-10 transition-colors"}`}>Home</Link>
          <Link to="/docs" onClick={() => setMenuOpen(false)} className={`text-[0.9rem] no-underline ${isDocsPage ? "text-blue-10" : "text-tx hover:text-blue-10 transition-colors"}`}>Docs</Link>
          <a href="https://starliner.app" target="_blank" className="text-tx text-[0.9rem] no-underline hover:text-blue-10 transition-colors">Get started</a>
          <a href="mailto:mail@starliner.dev" className="bg-violet-10 text-white cursor-pointer py-[0.25rem] rounded mb-2 px-4 text-[0.9rem] font-semibold no-underline hover:opacity-90 transition-opacity w-fit inline-flex items-center">Get in touch</a>
        </div>
      )}
    </nav>
  );
}
