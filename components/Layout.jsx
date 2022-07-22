import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
