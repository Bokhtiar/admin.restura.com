import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";

export const MainLayout = () => (
  <>
    <section className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full px-2">
        <Outlet />
      </div>
    </section>
  </>
);
