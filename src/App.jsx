import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import ServicioDiseno from "./pages/ServicioDiseno";
import ServicioCarpinteria from "./pages/ServicioCarpinteria";
import ServicioMedida from "./pages/ServicioMedida";
import Contacto from "./pages/Contacto";
import Prueba from "./pages/prueba";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="servicios/diseno" element={<ServicioDiseno />} />
          <Route path="servicios/carpinteria" element={<ServicioCarpinteria />} />
          <Route path="servicios/a-medida" element={<ServicioMedida />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="prueba" element={<Prueba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
