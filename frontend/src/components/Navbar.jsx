import React from "react";
import Logo from "../Pictures/Logo.jpg";

export default function Navbar() {
  return (
    <nav className="header">
      <img src={Logo} alt="Logo Ino'vin" />
      <h1>INO'VIN</h1>
    </nav>
  );
}
