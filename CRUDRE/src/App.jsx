import "./App.css";
import BtnPrincipal from "./principal/buttons";
import TittleH from "./principal/TittleH";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div id="header" className="mb-2 shadow-sme">
        <TittleH colorT="text-white" text="Prueba de CRUD en RIACT" />
      </div>
      <div className="flex w-full max-w-screen-xl max-h-screen-xl px-4 py-10 sm:px-6 lg:px-8 justify-center">
        <div className="flex w-full max-w-lg md:w-screen lg:w-screen xl:w-screen">
          <div className="w-full">
            <Link to="/consultar">
              <BtnPrincipal
                btntext="Mostrar Registro"
                color="bg-purple-700"
                hover="hover:bg-purple-600"
              />
            </Link>
            <Link to="/crear">
              <BtnPrincipal
                btntext="Crear Registro"
                color="bg-cyan-700"
                hover="hover:bg-cyan-600"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
