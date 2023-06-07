import React from "react";
import SignIn from "../components/SignIN";
import "../App.scss";

export default function Home() {
  return (
    <div className="Home">
      <h1> "hello world depuis Home !!!" </h1>;
      <SignIn element={SignIn} />
    </div>
  );
}
