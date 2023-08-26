import { Link } from "react-router-dom";
import logo from "../assets/icono.ico"
const user = "David";
const Navbar = () =>{
    return(
        <div className="flex bg-slate-800 text-center items-center">
            <div className="flex-none py-2 px-4">
                <Link to="/"><img src={logo} alt="SDS.jpg" className="w-10"/></Link>
            </div>
            <div className="md:flex hidden w-screen">
                <div className="group relative ">
                    <div className="flex-none">
                        <button className="text-white text-lg font-normal pr-6 py-3 ">Bienvenido, {user}</button>
                    </div>
                    <div className="absolute left-0 hidden group-hover:block bg-white py-auto border-none rounded-md shadow-xl">
                       <Link
                        to="/"
                        className="block  text-black px-6 py-2 hover:text-slate-400  border-t border-slate-200"
                        >
                        Mis pedidos
                        </Link>
                        <Link
                        to="/"
                        className="block border-t border-slate-200 text-black px-6 py-2 hover:text-slate-400"
                        >
                        Cerrar sesion
                        </Link>
                    </div>
                </div>
                <div className="grow mt-3">
                    <Link to="/crear" className="lg:text-xl md:text-lg text-white font-semibold hover:text-slate-400 px-6 py-4 border-none rounded-lg">Mi carrito</Link>
                </div>
                <div className="flex-none mt-3">
                    <input type="text" name="" id="" className="rounded-md px-2 py-1 text-xs mr-2 " placeholder="Buscar"/>
                    <button className="bg-transparent border border-green-500 text-white text-xs font-normal py-1 px-4 mr-6 rounded-lg hover:bg-green-700 hover:text-gray-100">Buscar</button>
                </div>
            </div>

            <div className="md:hidden">
                <div className="group static">
                <button className="font-semibold py-4 px-12 hover:text-slate-400 focus:text-slate-400 absolute right-0 top-0 text-white">
                    Menu
                </button>
                    <div className="absolute left-0 top-14 hidden group-hover:block bg-slate-800 py-auto w-screen border-none rounded-b-md shadow-b-xl">
                    <div className="group relative">
                        <div className="flex-none">
                            <button className="text-white font-normal pr-6 py-3">Bienvenido, {user}</button>
                        </div>
                        <div className="hidden group-hover:block bg-white py-auto border-none rounded-md shadow-xl">
                        <Link
                            to="/"
                            className="block  text-black px-6 py-2 hover:text-slate-400 border-t border-slate-200"
                            >
                            Mis pedidos
                            </Link>
                            <Link
                            to="/"
                            className="block border-t border-slate-200 text-black px-6 py-2 hover:text-slate-400"
                            >
                            Cerrar sesion
                            </Link>
                        </div>
                    </div>
                       <Link
                        to="/crear"
                        className="block hover:bg-slate-700 px-6 py-2 text-white hover:text-slate-400"
                        >
                        Mi carrito
                        </Link>
                        <div className="block   py-2 px-6">
                            <input type="text" name="" id="" className="rounded-md px-2 py-1 text-xs mr-2 " placeholder="Buscar"/>
                            <button className="bg-transparent border border-green-500 text-white text-xs font-normal py-1 px-4 mr-6 rounded-lg hover:bg-green-700 hover:text-gray-100">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar