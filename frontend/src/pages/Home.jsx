import React from "react";
import Header from "../components/Header";
import SignIn from "../components/SignIN";

export default function Home() {
  return (
    <div className="Home">
      <Header element={Header} />
      <SignIn element={SignIn} />
    </div>
  );
}
