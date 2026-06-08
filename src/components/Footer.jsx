export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#D9D9D6] py-7 px-6 text-center text-xs border-t border-[#6C4A32]/40">
      <p className="mb-1 text-[#F5F5F3] font-semibold text-base tracking-wide">MODIKA</p>
      <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
    </footer>
  );
}
