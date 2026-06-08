import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const endpoint =
    import.meta.env.VITE_FORMSUBMIT_ENDPOINT ??
    "https://formsubmit.co/ajax/contacto@modika.co";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          mensaje: form.mensaje,
          _subject: `Nuevo mensaje desde MODIKA - ${form.nombre}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const rawResponse = await response.text();
      let result = {};

      try {
        result = rawResponse ? JSON.parse(rawResponse) : {};
      } catch {
        result = { message: rawResponse };
      }

      const successFlag = result?.success === true || result?.success === "true";

      if (!response.ok || !successFlag) {
        const serviceMessage =
          result?.message ||
          "No se pudo enviar el formulario. Revisa si el correo de FormSubmit ya fue activado.";
        throw new Error(serviceMessage);
      }

      setSubmitStatus({
        type: "success",
        message: "Mensaje enviado correctamente. Te responderemos pronto.",
      });
      setForm({ nombre: "", email: "", mensaje: "" });
    } catch (error) {
      const rawMessage = error?.message || "";
      const needsActivation =
        rawMessage.includes("needs Activation") ||
        rawMessage.includes("Activate Form");

      const friendlyMessage = needsActivation
        ? "Falta activar el formulario. Revisa el correo contacto@modika.co y haz clic en 'Activate Form' para habilitar los envios."
        : rawMessage ||
          "No pudimos enviar tu mensaje en este momento. Intenta nuevamente en unos minutos.";

      setSubmitStatus({
        type: "error",
        message: friendlyMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#F5F5F3]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
          Contacto
        </h2>
        <p className="font-normal text-[#6C4A32] mb-12">
          Completa el formulario y te responderemos pronto.
        </p>

        {submitStatus.message && (
          <p
            className={`mb-6 rounded-lg px-4 py-3 text-sm font-medium ${
              submitStatus.type === "success"
                ? "bg-[#D9D9D6] text-[#111111]"
                : "bg-[#6C4A32]/10 text-[#6C4A32]"
            }`}
          >
            {submitStatus.message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="w-full border border-[#D9D9D6] rounded-xl px-4 py-3 text-sm bg-[#F5F5F3] text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#8A6242]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-1">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              required
              className="w-full border border-[#D9D9D6] rounded-xl px-4 py-3 text-sm bg-[#F5F5F3] text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#8A6242]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="¿En qué podemos ayudarte?"
              rows={5}
              required
              className="w-full border border-[#D9D9D6] rounded-xl px-4 py-3 text-sm bg-[#F5F5F3] text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#8A6242] resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#8A6242] text-[#F5F5F3] font-semibold px-8 py-3 rounded-full hover:bg-[#6C4A32] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
