import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";

export const MainLayout = () => (
  <>
    <section>
      <div className="grid md:grid-cols-5 grid-cols-1">
        <div className=" col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4">
          <Navbar />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </section>
  </>
);
