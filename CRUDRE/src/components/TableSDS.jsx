import { Link } from "react-router-dom";
import LPro from "./LProducts";

const user = "David";

const TableP =()=>{
    
    return(
        <>
        <div className="w-screen h-36 flex justify-center mt-4 ">
            <div className=" w-4/5 h-max rounded-md shadow-lg ">
                <div className="flex justify-between bg-gray-200 rounded-t-md px-2 py-3 shadow-b-lg">
                    <div className="">
                        <span className="md:text-lg text-sm font-semibold  py-2">Lista de productos</span>
                    </div>
                    <div className="">
                    <Link to="/addp">
                        <button className="cursor-pointer px-6 py-2 bg-green-800 hover:bg-green-500 hover:text-gray-100 rounded-md md:text-sm text-xs text-white">Nuevo Producto</button>
                    </Link>
                    </div>
                </div>
                <div className="h-px bg-slate-200 mb-2"></div>
                <div className="m-2 bg-gray-200">
                           <LPro/>
                </div>
                <div className="flex justify-between bg-gray-200 px-2 py-3 shadow-b-lg">
                    <div className="">
                        <span className="md:text-lg text-sm font-semibold  py-2">Editor, {user}</span>
                    </div>
                    <div className="">
                        <Link to="/addp">
                            <button className=" px-6 py-2 bg-red-800 hover:bg-red-500 hover:text-gray-100 rounded-md md:text-sm text-xs text-white">Cerrar sesion</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default TableP