import { Outlet, useLocation } from "react-router-dom";
import MainNavbar from "../../components/Navbar/MainNavbar";
import Footer from "../../components/Footer/MainFooter";
import ActionNavbar from "../../components/Navbar/ActionNavbar"


const MainLayout = () => {
const loc = useLocation().pathname;
  return (
    <>
      <header className="md:flex fixed left-0 w-full top-0 bg-white md:h-auto z-50">
        {loc != '/' ? <ActionNavbar/> : <MainNavbar />}
      </header>

      <main className={`${loc == '/' ? "pt-32 md:pt-40" : 'pt-[120px]'}`}>
        <Outlet />
      </main>

      
      <footer className="bg-athena py-7 lg:pb-0">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
