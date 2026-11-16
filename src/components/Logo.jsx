import { Link } from "react-router-dom";

function Logo({ light = false }) {
    return (
        <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white">
                M
            </div>

            <div>
                <h1 className={`text-xl font-extrabold ${light ? "text-white" : "text-blue-950"
                    }`}>
                    Mastersam
                </h1>

                <p className={`text-xs tracking-widest ${light ? "text-gray-400" : "text-gray-500"
                    }`}>
                    DIGITAL SOLUTIONS
                </p>
            </div>
        </Link>
    );
}

export default Logo;