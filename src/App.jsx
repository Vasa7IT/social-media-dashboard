import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const [dark, setDark] = useState(true);
  return (
    // context provider
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className="app">
        {loggedIn ? (
          <>
            <Nav />
            <Main />
          </>
        ) : (
          <Login />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
