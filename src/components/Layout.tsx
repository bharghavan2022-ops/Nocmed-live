import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/features", label: "Features" },
  { to: "/simulation", label: "Simulation" },
  { to: "/video", label: "Video" },
  { to: "/business-model", label: "Business Model" },
  { to: "/about", label: "About" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0B0E14]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_12px_2px_rgba(45,212,191,0.7)]" />
            MET-Agent
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-white/5 text-amber-300"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="rounded-md border border-white/10 p-2 text-slate-300 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-white/5 px-5 py-3 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm ${
                    isActive ? "bg-white/5 text-amber-300" : "text-slate-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/5 px-5 py-10 text-sm text-slate-500">
        <div className="mx-auto max-w-6xl">
          <p className="text-amber-300/80">
            Hackathon prototype — not validated clinical software.
          </p>
          <p className="mt-2">
            MET-Agent is an informational website for a 24-hour hackathon project. It does not run
            the product's real backend and makes no live model calls.
          </p>
        </div>
      </footer>
    </div>
  );
}
