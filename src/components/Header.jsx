import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="header-link" to="/">
        <h1>NC News</h1>
      </Link>
    </header>
  );
};

export default Header;
