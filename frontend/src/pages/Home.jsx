import React from "react";
import SignIn from "../components/SignIN";
import Score from "../components/Score";
import "../App.scss";

export default function Home() {
  return (
    <div className="Home">
      <SignIn element={SignIn} />
      <Score element={Score} />
    </div>
  );
}
