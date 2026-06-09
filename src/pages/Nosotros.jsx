import { useEffect, useMemo, useState } from "react";

export default function Nosotros() {
  const experiencia = useMemo(
    () => [
      {
        valorObjetivo: 12,
        descripcion: "Años de experiencia",
        detalle: "Evolucionando espacios residenciales y comerciales.",
      },
      {
        valorObjetivo: 150,
        descripcion: "Proyectos realizados",
        detalle: "Obras ejecutadas con precision tecnica y estetica.",
      },
      {
        valorObjetivo: 650,
        descripcion: "Diseños desarrollados",
        detalle: "Propuestas personalizadas para cada cliente y contexto.",
      },
    ],
    [],
  );

  const [valoresAnimados, setValoresAnimados] = useState(
    experiencia.map(() => 0),
  );

  useEffect(() => {
    const objetivos = experiencia.map((item) => item.valorObjetivo);
    const duracion = 1400;
    const inicio = performance.now();
    let frameId = 0;

    const animar = (ahora) => {
      const progreso = Math.min((ahora - inicio) / duracion, 1);
      const eased = 1 - (1 - progreso) ** 3;

      setValoresAnimados(
        objetivos.map((objetivo) => Math.round(objetivo * eased)),
      );

      if (progreso < 1) {
        frameId = requestAnimationFrame(animar);
      }
    };

    frameId = requestAnimationFrame(animar);

    return () => cancelAnimationFrame(frameId);
  }, [experiencia]);

  const pilares = [
    {
      titulo: "Visión arquitectónica",
      descripcion:
        "Cada proyecto nace de una lectura del espacio, la luz y la funcionalidad.",
    },
    {
      titulo: "Detalle carpintero",
      descripcion:
        "Seleccionamos materiales y acabados con una logica de durabilidad y elegancia.",
    },
    {
      titulo: "Ejecución precisa",
      descripcion:
        "Coordinamos diseño y fabricación para entregar resultados consistentes.",
    },
  ];

  const misionVision = [
    {
      tipo: "Misión",
      titulo: "Diseñar y construir espacios con identidad.",
      descripcion:
        "Transformamos ideas en ambientes funcionales, elegantes y duraderos, integrando arquitectura y carpintería con ejecución precisa.",
      acento: "bg-[#8A6242]",
      fondo: "bg-white/80",
      borde: "border-[#C2C2BE]",
      hoverFondo: "hover:bg-[#F5E7D7]",
    },
    {
      tipo: "Visión",
      titulo: "Ser referencia en diseño + carpintería arquitectónica premium.",
      descripcion:
        "Queremos liderar proyectos de alto valor en Colombia y la región, destacándonos por innovación, detalle técnico y confianza.",
      acento: "bg-[#F5F5F3]",
      fondo: "bg-[#2A221D]",
      borde: "border-[#6C4A32]/50",
      hoverFondo: "hover:bg-[#362B24]",
      textoClaro: true,
    },
  ];

  const equipo = [
    {
      id: "equipo-1",
      nombre: "Andrea Molina",
      rol: "Direccion Creativa",
      bio: "Lidera el concepto espacial y traduce la vision del cliente en soluciones funcionales y elegantes.",
      foto: "/imagenes/equipo/placeholder-equipo.svg",
    },
    {
      id: "equipo-2",
      nombre: "Felipe Rojas",
      rol: "Arquitectura de Proyecto",
      bio: "Coordina distribucion, materialidad y detalle tecnico para asegurar coherencia en cada entrega.",
      foto: "/imagenes/equipo/placeholder-equipo.svg",
    },
    {
      id: "equipo-3",
      nombre: "Valentina Castro",
      rol: "Especialista en Carpintería",
      bio: "Convierte el diseno en piezas de alto nivel con precision constructiva y acabados premium.",
      foto: "/imagenes/equipo/placeholder-equipo.svg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F5F3] py-24 px-6">
      <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-[#D9D9D6]/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[#8A6242]/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
          <article className="rounded-3xl border border-[#C8C8C4] bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.04)]">
            <span className="group relative inline-flex overflow-hidden rounded-full p-[2px] bg-[#C2C2BE] shadow-[0_6px_16px_rgba(17,17,17,0.07)] transition-transform duration-300 hover:-translate-y-0.5">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#8A6242_0deg,#8A6242_90deg,#D9D9D6_90deg,#D9D9D6_360deg)] opacity-85 animate-[spin_7s_linear_infinite]" />
              <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-[#F5F5F3] px-4 py-1.5 text-[10px] md:text-[11px] font-semibold tracking-[0.16em] md:tracking-[0.18em] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8A6242]" />
                <span className="text-[#6C4A32]">Modika</span>
              </span>
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-[#111111]">
              Diseña espacios que se habitan con estilo y precisión.
            </h2>
            <p className="mt-5 font-normal text-[#6C4A32] text-base md:text-lg max-w-2xl">
              En MODIKA unimos pensamiento arquitectónico y maestría carpintera para
              crear ambientes funcionales, sobrios y atemporales. Nuestra historia
              está construida sobre la confianza, el detalle y la ejecución impecable.
            </p>
          </article>

          <aside className="group relative overflow-hidden rounded-3xl border border-[#6C4A32]/30 bg-[#1A1512] p-8 md:p-10 text-[#F5F5F3] flex flex-col justify-between shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
            <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#D9D9D6]">
                Trayectoria
              </p>
              <p className="mt-4 text-2xl md:text-3xl font-bold">
                Arquitectura al frente.
              </p>
              <p className="mt-2 text-sm font-normal text-[#D9D9D6]">
                Carpintería de alto nivel como sello final.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <div className="h-px w-full bg-[#6C4A32]/60" />
              <p className="text-sm font-medium text-[#F5F5F3]">
                80% Arquitectura · 20% Carpintería
              </p>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experiencia.map((metric, index) => (
            <article
              key={metric.descripcion}
              className="rounded-2xl border border-[#C2C2BE] bg-gradient-to-b from-white to-[#F5F5F3] p-6 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.03),0_10px_24px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6242]/55 hover:shadow-[inset_0_0_0_1px_rgba(138,98,66,0.18),0_18px_34px_rgba(17,17,17,0.14)]"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-[#8A6242]" />
              <p className="text-4xl md:text-5xl font-bold text-[#111111]">+{valoresAnimados[index]}</p>
              <h3 className="mt-2 text-base font-semibold text-[#111111]">{metric.descripcion}</h3>
              <p className="mt-2 text-sm font-normal text-[#6C4A32]">{metric.detalle}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-[#C8C8C4] bg-white/70 p-8 md:p-10 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.04)]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#6C4A32]">Propósito de marca</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#111111]">
                Misión y visión que guían cada proyecto.
              </h3>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {misionVision.map((item) => (
              <article
                key={item.tipo}
                className={`relative rounded-2xl border p-6 md:p-7 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.03),0_10px_24px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 ${item.fondo} ${item.borde} ${item.hoverFondo}`}
              >
                <div className={`h-1.5 w-14 rounded-full ${item.acento}`} />
                <p className={`mt-4 text-xs tracking-[0.18em] uppercase font-semibold ${item.textoClaro ? "text-[#D9D9D6]" : "text-[#8A6242]"}`}>
                  {item.tipo}
                </p>
                <h4 className={`mt-2 text-xl font-bold leading-snug ${item.textoClaro ? "text-[#F5F5F3]" : "text-[#111111]"}`}>
                  {item.titulo}
                </h4>
                <p className={`mt-3 text-sm font-normal ${item.textoClaro ? "text-[#D9D9D6]" : "text-[#6C4A32]"}`}>
                  {item.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>



        <div className="rounded-3xl border border-[#C8C8C4] bg-white/70 p-8 md:p-10 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.04)]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#6C4A32]">Nuestro enfoque</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#111111]">
                Innovación con criterio técnico y estético.
              </h3>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {pilares.map((pillar) => (
              <article
                key={pillar.titulo}
                className="rounded-2xl border border-[#C2C2BE] bg-gradient-to-b from-white to-[#F5F5F3] p-6 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.03),0_8px_20px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8A6242]/55 hover:shadow-[inset_0_0_0_1px_rgba(138,98,66,0.16),0_16px_30px_rgba(17,17,17,0.12)]"
              >
                <div className="h-1.5 w-14 rounded-full bg-[#8A6242]" />
                <h4 className="mt-4 text-lg font-semibold text-[#111111]">{pillar.titulo}</h4>
                <p className="mt-2 text-sm font-normal text-[#6C4A32]">{pillar.descripcion}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#C8C8C4] bg-white/70 p-8 md:p-10 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.04)]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#6C4A32]">Nuestro equipo</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#111111]">
                Profesionales que dan vida a cada proyecto.
              </h3>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#D9D9D6] bg-transparent">
            {equipo.map((member, index) => (
              <article
                key={member.id}
                className={`flex flex-col gap-5 p-5 md:flex-row md:items-center md:gap-6 ${
                  index !== equipo.length - 1 ? "border-b border-[#D9D9D6]" : ""
                }`}
              >
                <img
                  src={member.foto}
                  alt={`Foto de ${member.nombre}`}
                  className="h-20 w-20 shrink-0 rounded-2xl border border-[#D9D9D6] bg-[#111111] p-2 object-contain"
                  loading="lazy"
                />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-4">
                    <h4 className="text-lg font-semibold text-[#111111]">{member.nombre}</h4>
                    <p className="text-xs tracking-[0.14em] uppercase font-medium text-[#8A6242]">
                      {member.rol}
                    </p>
                  </div>
                  <p className="mt-2 text-sm font-normal text-[#6C4A32]">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
