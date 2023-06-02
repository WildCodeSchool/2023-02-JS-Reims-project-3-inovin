import React from "react";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIN";

export default function Home() {
  return (
    <div className="Home">
      <Navbar element={Navbar} />
      <SignIn element={SignIn} />
    </div>
  );
}
