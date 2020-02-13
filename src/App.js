import React from "react";
import Menu from "./Components/Menu";
import Profile from "./Components/Profile";
import Posts from "./Components/Posts";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <div className="body-container">
        <Profile
          heading="Joakim Wassberg"
          image="1bf6744a.jpg"
          body="This is Joakim, he is a cool guy!"
        />
        <Posts />
      </div>
    </React.Fragment>
  );
}

export default App;
