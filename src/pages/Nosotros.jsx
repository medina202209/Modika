export default function Nosotros() {
  return (
    <section className="py-24 px-6 bg-stone-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Nosotros
        </h2>
        <p className="text-stone-700 max-w-2xl mx-auto mb-12">
          Cuéntale a tus visitantes quiénes son y qué los hace únicos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-stone-100 border border-stone-300 rounded-2xl p-8 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-amber-200 rounded-xl mb-4" />
              <h3 className="font-semibold text-zinc-900 mb-2">Ítem {i}</h3>
              <p className="text-sm text-stone-700">
                Descripción corta. Reemplázala con tu contenido real.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
