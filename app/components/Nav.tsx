import { Link, useLocation } from "react-router";
import { useState } from "react";

export function Nav() {

  return (
    <nav className="py-5 top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="shrink-0">
          <img src="/logo.png" alt="Starliner" className="h-9 shrink-0 rounded-md" />
        </Link>
        <div className="flex items-center ml-auto shrink-0 gap-1">
          <a href="https://docs.starliner.dev" target="_blank" className="cursor-pointer text-gray-1 py-[0.25rem] rounded px-4 text-[0.9rem] font-semibold no-underline transition-opacity inline-flex items-center">Documentation</a>
          <a href="https://starliner.app" target="_blank" className="bg-violet-10 text-white cursor-pointer py-[0.25rem] rounded px-4 text-[0.9rem] font-semibold no-underline hover:opacity-90 transition-opacity inline-flex items-center">Early Access</a>
        </div>
      </div>
    </nav>
  );
}
