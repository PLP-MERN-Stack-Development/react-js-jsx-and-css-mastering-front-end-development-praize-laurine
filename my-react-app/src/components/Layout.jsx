import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <Navbar />
    <main className="flex-grow container mx-auto p-4">{children}</main>
    <Footer />
  </div>
);

export default Layout;
