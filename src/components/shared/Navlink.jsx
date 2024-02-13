import { Link } from "react-router-dom";

// Define the props object
const Navlink = ({ to, bg, text, textColor, onClick }) => {
  return (
    <Link
      onClick={onClick} // Pass onClick prop to Link
      className="nav-link"
      to={to}
      style={{ background: bg, color: textColor }}
    >
      {text}
    </Link>
  );
};

export default Navlink;
