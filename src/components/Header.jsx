import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header >
      <div className="inner-header">
      <Link className="header-link" to="/">
        <h1>NC News</h1>
        </Link>
        </div>
    </header>
  );
};

export default Header;
