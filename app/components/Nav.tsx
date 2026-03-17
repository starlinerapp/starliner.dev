import { Link, useLocation } from "react-router";

export function Nav() {
  const location = useLocation();
  const isDocsPage = location.pathname === "/docs";
  const isHomePage = location.pathname === "/";

  return (
    <nav className="flex gap-3 items-center py-5 top-0 z-50">
      <img src="/logo.png" alt="Starliner" className="h-8 w-8 shrink-0 rounded-md" />
      <Link to="/" className="flex items-center gap-2 font-bold text-[1rem] no-underline mr-6 shrink-0 hover:text-blue-10 transition-colors">
        Starliner
      </Link>

      <div className="flex items-center ml-auto shrink-0">
        <Link to="/" className={`text-[0.9rem] no-underline ${isHomePage ? "text-blue-10" : "text-tx hover:text-blue-10 transition-colors"}`}>Home</Link>
        <span className="text-border px-3 select-none">|</span>
        <Link to="/docs" className={`text-[0.9rem] no-underline ${isDocsPage ? "text-blue-10" : "text-tx hover:text-blue-10 transition-colors"}`}>Docs</Link>
        <span className="text-border px-3 select-none">|</span>
        <a href="https://starliner.app" target="_blank" className="text-tx text-[0.9rem] no-underline hover:text-blue-10 transition-colors">Get started</a>
        <span className="text-border px-3 select-none">|</span>
        <a href="mailto:mail@starliner.dev" className="bg-violet-10 text-white cursor-pointer py-[0.25rem] rounded px-4 text-[0.9rem] font-semibold no-underline hover:opacity-90 transition-opacity">Get in touch</a>
      </div>
    </nav>
  );
}
