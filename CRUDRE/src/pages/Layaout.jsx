import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-col min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
