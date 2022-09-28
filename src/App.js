import "./App.css";
import React from "react";
import UserCreate from "./components/UserCreate";
import { LanguageStore } from "./components/contexts/LanguageContext";
import ColorContext from "./components/contexts/ColorContext";
import LanguageSelector from "./components/LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value={"red"}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
