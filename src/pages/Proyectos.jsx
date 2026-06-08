export default function Proyectos() {
  return (
    <section className="py-24 px-6 bg-[#F5F5F3]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
          Proyectos
        </h2>
        <p className="font-normal text-[#6C4A32] max-w-2xl mx-auto mb-12">
          Aqui mostraremos los proyectos destacados de MODIKA.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="bg-[#F5F5F3] border border-[#D9D9D6] rounded-2xl p-8 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-full h-36 bg-gradient-to-br from-[#D9D9D6] to-[#F5F5F3] border border-[#D9D9D6] rounded-xl mb-4" />
              <h3 className="font-semibold text-[#111111] mb-2">Proyecto {i}</h3>
              <p className="text-sm font-normal text-[#6C4A32]">
                Ficha breve del proyecto: tipo de espacio, alcance y materiales.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
