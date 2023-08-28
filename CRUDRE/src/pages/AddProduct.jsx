import { Link } from "react-router-dom";

const AddP = () => {
  return (
    <>
      <div className="w-screen h-fit flex justify-center mt-4 ">
        <div className="w-2/3 h-max rounded-lg shadow-lg">
          <div className="text-center py-1 bg-cyan-700 rounded-t-lg ">
            <span className="text-sm md:text-lg font-bold text-gray-100">
              Nuevo producto
            </span>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
          <div className="w-full h-fit  flex items-center justify-center rounded-b-lg shadow-b-xl bg-gray-50">
            <div className="mt-2 w-4/5 h-full">
              <form action="" className="mb-4">
                <label
                  htmlFor="nombre"
                  className="ml-1 text-sm sm:text-md font-semibold"
                >
                  Nombre:{" "}
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre"
                  className=" mt-2 w-full rounded-md p-1 shadow-sm"
                />
                <label
                  htmlFor="descripcion"
                  className="ml-1 text-sm sm:text-md font-semibold"
                >
                  Descripcion:{" "}
                </label>
                <textarea
                  name="descripcion"
                  id="descripcion"
                  placeholder="Descripcion"
                  className=" mt-2 w-full rounded-md p-1 shadow-sm"
                />
                <label
                  htmlFor="precio"
                  className="ml-1 text-sm sm:text-md font-semibold"
                >
                  Precio:{" "}
                </label>
                <input
                  type="number"
                  name="precio"
                  id="precio"
                  placeholder="Precio"
                  className=" mt-2 w-full rounded-md p-1 shadow-sm mb-4"
                />
                <div className="flex justify-between w-full">
                  <button className="px-6 py-2 bg-green-700 rounded-lg text-white hover:bg-green-600 text-xs md:text-sm font-semibold">
                    Guardar
                  </button>
                  <Link to="/crear">
                    <button className=" px-6 py-2 bg-red-700 rounded-lg text-white hover:bg-red-600 text-xs md:text-sm font-semibold ">
                      Cancelar
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddP;
