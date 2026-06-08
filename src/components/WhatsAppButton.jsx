export default function WhatsAppButton() {
  const phoneFromEnv = import.meta.env.VITE_WHATSAPP_NUMBER ?? "573001234567";
  const messageFromEnv =
    import.meta.env.VITE_WHATSAPP_MESSAGE ??
    "Hola MODIKA, quisiera mas informacion sobre sus servicios.";

  const normalizedPhone = String(phoneFromEnv).replace(/\D/g, "");

  if (!normalizedPhone) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(
    messageFromEnv,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-[#D9D9D6]/60 bg-[#8A6242] px-4 py-2.5 text-sm font-semibold text-[#F5F5F3] shadow-lg transition-colors hover:bg-[#6C4A32]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 0 0-8.86 14.64L2 22l5.54-1.11A10 10 0 1 0 12 2Zm5.35 14.63c-.23.65-1.34 1.25-1.85 1.33-.47.08-1.06.12-1.72-.1-.4-.13-.9-.3-1.56-.58-2.74-1.18-4.53-3.94-4.66-4.12-.13-.18-1.1-1.47-1.1-2.8 0-1.34.7-1.99.95-2.26.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.07.63.5.23.56.78 1.95.85 2.09.07.14.12.31.02.5-.1.2-.14.31-.27.48-.13.17-.28.38-.4.5-.13.13-.26.27-.11.53.14.26.65 1.07 1.39 1.73.96.85 1.76 1.11 2.01 1.24.25.13.4.11.55-.07.14-.18.6-.7.76-.94.17-.24.33-.2.55-.12.23.08 1.44.68 1.69.8.25.12.41.18.47.29.06.12.06.67-.17 1.32Z" />
      </svg>
      <span className="hidden sm:inline">Chatea con nosotros</span>
    </a>
  );
}
