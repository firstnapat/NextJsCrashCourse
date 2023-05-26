import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({children}) {
  return (
    <div>
      <Navbar className="flex flex-col min-h-screen"/>
      <main className="flex-grow">{children}</main>
      <Footer className="py-4 text-center"/>
    </div>
  );
}
