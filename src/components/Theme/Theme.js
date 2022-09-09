import React from "react";
import "./index.css";

const Theme = ({ selectTheme }) => {
  return (
    <div className="theme">
      <input
        type="radio"
        id="themeLight"
        value="App light"
        name="theme"
        onClick={(event) => selectTheme(event.target.value)}
      />
      <label htmlFor="themeLight">Light</label>
      <input
        type="radio"
        id="themeDark"
        value="App dark"
        name="theme"
        onClick={(event) => selectTheme(event.target.value)}
      />
      <label htmlFor="themeDark">Dark</label>
      <input
        type="radio"
        id="themePurple"
        value="App"
        name="theme"
        onClick={(event) => selectTheme(event.target.value)}
      />
      <label htmlFor="themePurple">Purple</label>
    </div>
  );
};

export default Theme;
