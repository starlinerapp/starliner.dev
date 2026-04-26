import { Link } from "react-router";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
      <nav className="py-4 top-0 z-50">
        <div className="flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <img
                src="/logo.png"
                alt="Starliner"
                className="h-8 md:h-9 rounded-md"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <a
                href="https://docs.starliner.dev"
                target="_blank"
                className="text-gray-1 py-1 px-4 text-sm font-semibold"
            >
              Documentation
            </a>
            <a
                href="https://starliner.app"
                target="_blank"
                className="bg-violet-10 text-white py-1 px-4 text-sm font-semibold rounded hover:opacity-90"
            >
              Early Access
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-10 h-10"
          >
            <div className="space-y-1">
              <span className="block w-5 h-[2px] bg-black" />
              <span className="block w-5 h-[2px] bg-black" />
              <span className="block w-5 h-[2px] bg-black" />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
            <div className="md:hidden mt-4 flex flex-col gap-3">
              <a
                  href="https://docs.starliner.dev"
                  target="_blank"
                  className="text-gray-1 py-2 text-sm font-semibold"
              >
                Documentation
              </a>
              <a
                  href="https://starliner.app"
                  target="_blank"
                  className="bg-violet-10 text-white py-2 px-2 text-sm font-semibold rounded text-center"
              >
                Early Access
              </a>
            </div>
        )}
      </nav>
  );
}