import { Link } from "react-router-dom";

export default function ViewToggleButton({ to, label }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 bg-gray-300 rounded shadow  hover:bg-pink-700 transition"
      >{label}
    </Link>
  );
}
