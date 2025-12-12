import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-300 text-black font-bold text-[20px]  p-4 shadow-md ">
      <ul className="flex gap-4 justify-end">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors duration-300">
                Home
              </Link>
            </li>

            <li>
              <Link to="/owner" className="hover:text-blue-600 transition-colors duration-300">
                Owner
              </Link>
            </li>
        </ul>
    </nav>
  );
}