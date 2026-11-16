
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  House,
  UserRound,
  BriefcaseBusiness,
  Mail,
  Menu,
  X,
  Code2
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: House },
    { name: "About", path: "/about", icon: UserRound },
    { name: "Services", path: "/services", icon: BriefcaseBusiness },
    { name: "Contact", path: "/contact", icon: Mail }
  ];

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
            <Code2 size={26} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-slate-900">
              Mastersam
            </h1>
            <p className="text-[10px] font-semibold tracking-[3px] text-blue-600">
              DIGITAL SOLUTIONS
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={linkStyle}
              >
                <Icon size={18} />
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-800 hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={linkStyle}
                >
                  <Icon size={19} />
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
