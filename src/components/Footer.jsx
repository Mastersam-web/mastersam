import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">

                <div>
                    <Logo light />
                    <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                        Mastersam accompagne les entreprises et les particuliers
                        dans leur transformation numérique grâce à des solutions
                        modernes, créatives et performantes.
                    </p>
                </div>

                <div>
                    <h3 className="mb-5 text-lg font-bold">Navigation</h3>
                    <div className="flex flex-col gap-3 text-sm text-gray-400">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/about" className="hover:text-white">About</Link>
                        <Link to="/services" className="hover:text-white">Services</Link>
                        <Link to="/contact" className="hover:text-white">Contact</Link>
                    </div>
                </div>

                <div>
                    <h3 className="mb-5 text-lg font-bold">Contact</h3>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p>Email : contact@mastersam.com</p>
                        <p>Localisation : Bujumbura, Burundi</p>
                        <p>Disponibilité : Lundi - Samedi</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 px-6 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Mastersam. Tous droits réservés.
            </div>
        </footer>
    );
}

export default Footer;