import React from "react";
import SignIn from "../components/SignIN";
import "../App.scss";

export default function Home() {
  return (
    <div className="Home">
      <SignIn element={SignIn} />
    </div>
  );
}
