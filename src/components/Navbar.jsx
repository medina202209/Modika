import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";


const links = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Prueba", to: "/prueba" },
];

const serviceLinks = [
  { label: "Diseño", to: "/servicios/diseno" },
  { label: "Carpintería", to: "/servicios/carpinteria" },
  { label: "Proyectos a medida", to: "/servicios/a-medida" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (to) => location.pathname === to;
  const isServicesActive = location.pathname.startsWith("/servicios");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/95 text-stone-100 shadow-xl border-b border-zinc-800 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-stone-100 tracking-tight">Modika</span>
        </Link>

        {/* Links — escritorio */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-stone-300 items-center">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`transition-colors duration-200 ${isActive(link.to) ? "text-amber-500 font-semibold" : "hover:text-amber-600"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="relative group">
            <Link
              to="/servicios"
              className={`transition-colors duration-200 ${isServicesActive ? "text-amber-500 font-semibold" : "hover:text-amber-600"}`}
            >
              Servicios
            </Link>
            <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
              <ul className="w-56 rounded-xl border border-zinc-700 bg-zinc-800 shadow-2xl p-2">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.to}
                      className="block rounded-lg px-3 py-2 text-sm text-stone-200 hover:bg-zinc-700 hover:text-amber-600 transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* CTA — escritorio */}
        <Link
          to="/contacto"
          className={`hidden md:inline-block text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 ${isActive("/contacto") ? "bg-amber-500 text-stone-100" : "bg-amber-700 text-stone-100 hover:bg-amber-600"}`}
        >
          Contáctanos
        </Link>

        {/* Botón hamburguesa — móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-stone-100 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-stone-100 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-stone-100 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
        
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-700 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-stone-300">
            <li>
              <Link
                to="/servicios"
                className={`transition-colors ${isServicesActive ? "text-amber-500 font-semibold" : "hover:text-amber-600"}`}
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Servicios
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="w-full text-left hover:text-amber-600 transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Ver subservicios
              </button>
              {mobileServicesOpen && (
                <ul className="mt-3 pl-4 border-l border-zinc-700 space-y-3">
                  {serviceLinks.map((service) => (
                    <li key={service.label}>
                      <Link
                        to={service.to}
                        className={`transition-colors ${isActive(service.to) ? "text-amber-500 font-semibold" : "text-stone-300 hover:text-amber-600"}`}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`transition-colors ${isActive(link.to) ? "text-amber-500 font-semibold" : "hover:text-amber-600"}`}
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
