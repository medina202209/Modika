import { useState } from "react";
import { Link, useLocation } from "react-router-dom";



const links = [
  { label: "Inicio", to: "/" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (to) => location.pathname === to;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111111]/95 text-[#F5F5F3] shadow-xl border-b border-[#6C4A32]/40 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 rounded-lg border border-[#6C4A32]/35 bg-[#F5F5F3]/5 px-2 py-1.5 transition-colors duration-300 hover:bg-[#F5F5F3]/10"
        >
          <img
            src={"/imagenes/logo/logoModika.png"}
            alt="Logo MODIKA"
            className="h-8 w-8 md:h-9 md:w-9 object-contain"
          />
        </Link>

        {/* Links — escritorio */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-[#D9D9D6] items-center">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`transition-colors duration-200 ${isActive(link.to) ? "text-[#F5F5F3] font-semibold" : "hover:text-[#8A6242]"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa — móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-[#F5F5F3] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5F5F3] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5F5F3] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
        
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#6C4A32]/40 px-6 py-3">
          <ul className="flex flex-col gap-3 text-sm font-medium text-[#D9D9D6]">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`transition-colors ${isActive(link.to) ? "text-[#F5F5F3] font-semibold" : "hover:text-[#8A6242]"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
