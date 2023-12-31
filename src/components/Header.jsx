import "./Header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Header = () => {
  const { setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((pizza) => !pizza);
  };
  return (
    <header>
      <img src="/img/Logo.svg" alt="" />
      <div>
        <nav className="headerNav">
          <NavLink to="/">MAIN</NavLink>
          <NavLink to="/Galler">GALLERY</NavLink>
          <NavLink to="/Projects">PROJECTS</NavLink>
          <NavLink to="/Certification">CERTIFICATION</NavLink>
          <NavLink to="/Contacts">CONTACTS</NavLink>
        </nav>
      </div>
      <div onClick={toggleTheme}>
        <img src="./img/DarkMode.svg" alt="HalfMoonForDarkMode" />
      </div>
    </header>
  );
};

export default Header;
