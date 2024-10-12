import Footer from "../../navigation/Footer";
import NavbarAdmin from "../navigation/NavbarAdmin";

// eslint-disable-next-line react/prop-types
const BaseLayoutAdmin = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-default">
      {/* Navbar */}
      <NavbarAdmin />

      <main className="flex-1 pt-44">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BaseLayoutAdmin;
