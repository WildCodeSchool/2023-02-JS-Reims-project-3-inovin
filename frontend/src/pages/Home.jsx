import React from "react";
import SignIn from "../components/SignIN";
import "../App.scss";
import Notation from "../components/Notation";

export default function Home() {
  return (
    <div className="Home">
      <SignIn element={SignIn} />
      <Notation element={Notation} />
    </div>
  );
}
