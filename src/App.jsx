import { useState } from "react";
import { nl } from "./translations/nl.js";
import { en } from "./translations/en.js";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

import "./styles/global.css";

function App() {
  const [language, setLanguage] = useState("nl");

  const translations = language === "nl" ? nl : en;

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "nl" ? "en" : "nl"));
  };

  return (
    <div className="app">
      <Header translations={translations} onToggleLanguage={toggleLanguage} />

      <main>
        <Hero translations={translations} />
        <Services translations={translations} />
      </main>
    </div>
  );
}

export default App;