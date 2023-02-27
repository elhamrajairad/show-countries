import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import "./header.css";

const Header = () => {
  let [themeToggle, setToggleTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  function handlerToggoleThem() {
    themeToggle === "light" ? setToggleTheme("dark") : setToggleTheme("light");
  }
  useEffect(() => {
    localStorage.setItem("theme", themeToggle);
    const header = document.querySelector("header");
    const body = document.body;
    if (header.classList.contains("light")) {
      header.classList.remove("light");
      body.style.backgroundColor = "#202D36";
      body.style.color = "#fff";
      header.classList.add("dark");
    } else {
      header.classList.remove("dark");
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";
      header.classList.add("light");
    }
  }, [themeToggle]);
  return (
    <>
      <header className="shadow">
        <div className="mx-auto py-6 px-3 lg:container">
          <section className="flex flex-row flex-wrap justify-between align-middle items-center">
            <h2 className="font-bold">where in the world ?</h2>
            <button onClick={handlerToggoleThem}>
              {themeToggle === "light" ? (
                <i className="ri-sun-line font-semibold"></i>
              ) : (
                <i className="ri-moon-line font-semibold"></i>
              )}
            </button>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
