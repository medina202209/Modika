import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Formulario enviado:", form);
    alert("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section className="py-24 px-6 bg-stone-200">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Contacto
        </h2>
        <p className="text-stone-700 mb-12">
          Completa el formulario y te responderemos pronto.
        </p>

        <div className="flex flex-col gap-4 text-left">
          <div>
            <label className="block text-sm font-medium text-stone-800 mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 text-sm bg-stone-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-800 mb-1">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 text-sm bg-stone-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-800 mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="¿En qué podemos ayudarte?"
              rows={5}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 text-sm bg-stone-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-amber-700 text-stone-100 font-semibold px-8 py-3 rounded-full hover:bg-amber-600 transition-colors"
          >
            Enviar mensaje
          </button>
        </div>
      </div>
    </section>
  );
}
