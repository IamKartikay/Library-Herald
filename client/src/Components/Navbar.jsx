import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logonobg.png";
import Button from "./Button";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";

export default function Example() {
  const navigate = useNavigate();

  const handleNavbarAnchoring = (anchorTag, id ) => {
    navigate('/')
    anchorTag.href = '#'+id+'Anchor'
  }

  const handleMouseExit = () => {
    setTimeout(() => {
      setNavDrop(false);
    }, 2000);
  };
  const [NavDrop, setNavDrop] = useState(false);
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <img src={logo} alt="Library Herald" style={{ paddingLeft: "25px" }} />
      </Link>
      <div className="nav-section">
        <Link
          to={"/"}
          style={{ fontSize: "35px", fontWeight: "400", fontFamily: "auto" }}
        >
          LIBRARY HERALD
        </Link>
      </div>
      <div className="nav-section">
        <Link to={"/"}>Home</Link>
        <ScrollLink
          to="/about"
          onMouseEnter={() => setNavDrop(true)}
        >
          About
        </ScrollLink>
        {NavDrop && (
          <div className="nav-drop" onMouseLeave={handleMouseExit}>
            <a  id='about' onClick={(event) => handleNavbarAnchoring(event.target, event.target.id)}>About the Journal</a>
            <a id="editorial" onClick={(event) => handleNavbarAnchoring(event.target, event.target.id)}>Editorial Board</a>
            <Link to={'/authorGuidelines'}>Author Guidelines</Link>
            <Link>Copyright Assignment Form</Link>
          </div>
        )}
        <Link to={"/archieve"}>Archive</Link>
        <a id='contact' onClick={(event) => handleNavbarAnchoring(event.target, event.target.id)}>Contact Us</a>
        <Button
          bgcolor={"#fff2d4"}
          textColor={"black"}
          buttonText={"Subscribe"}
        />
      </div>
    </div>
  );
}
