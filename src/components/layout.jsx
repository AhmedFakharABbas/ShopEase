import { Outlet } from "react-router-dom";
import Navbar from "./Header";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}
