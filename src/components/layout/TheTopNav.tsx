import { Link } from "react-router-dom";
import "./TheTopNav.css";

export default function TheTopNav() {
  return (
    <nav>
      <div className="app-name">Lord of the rings</div>

      <ul>
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}
