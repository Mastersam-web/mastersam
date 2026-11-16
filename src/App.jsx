import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">

        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="*"
              element={
                <div className="p-20 text-center">
                  <h1 className="text-4xl font-bold">404</h1>
                  <p className="mt-3 text-gray-600">
                    Page introuvable.
                  </p>
                </div>
              }
            />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;