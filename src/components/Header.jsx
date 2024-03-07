import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import logo from "../img/blog-logo.jpg";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = "custom-dropdown-menu";
  if (isDisplayed) {
    dropdownMenuClasses += " display-mobile-menu";
  }

  return (
    <header className="Header">
      <nav className="nav bg-primary w-100">
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-3">
            <img src={logo} alt="the good avocado logo" />
          </Link>
          <div className="menu-icon-container">
            <span
              onClick={handleMenuClick}
              className="material-icons menu-icon "
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              {/* art&design */}
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/artanddesign"
                  className="p-3 text-uppercase category-link"
                >
                  Art&Design
                </Link>
              </li>
              {/* technology */}
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/technology"
                  className="p-3 text-uppercase category-link"
                >
                  Tech
                </Link>
              </li>
              {/* travel */}
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/travel"
                  className="p-3 text-uppercase category-link"
                >
                  Travel
                </Link>
              </li>
              {/* lifestyle */}
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/lifeandstyle"
                  className="p-3 text-uppercase category-link"
                >
                  Lifestyle
                </Link>
              </li>
              {/* sport */}
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/sport"
                  className="p-3 text-uppercase category-link"
                >
                  Sport
                </Link>
              </li>
              {/* favorite */}
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/favorites"
                  className="p-3 text-uppercase category-link-fav"
                >
                  Favorite
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
