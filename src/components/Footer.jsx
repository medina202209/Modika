export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-stone-400 py-10 px-6 text-center text-sm border-t border-zinc-800">
      <p className="mb-2 text-stone-100 font-semibold text-lg">MODIKA</p>
      <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
    </footer>
  );
}
