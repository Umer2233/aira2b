import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
  const [display, setDisplay] = useState("hidden");
  const location = useLocation();
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    return window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname !== "/"]);

  useEffect(() => {
    let addEvent = window.addEventListener;
    let removeEvent = window.removeEventListener;
    const handleScroll = (event) => {
      return event("scroll", () => {
        window.scrollY > 203 ? setDisplay("block") : setDisplay("hidden");
      });
    };
    handleScroll(addEvent);
    return handleScroll(removeEvent);
  }, [display]);

  return (
    <>
      <button
        className={`rounded-full w-10 h-10 shadow-lg bg-primary-100 delay-1000 fixed top-3/4 right-6 outline-none border-none animate-bounce ${display}`}
        onClick={handleGoToTop}
      >
        <i className="fa-solid fa-angle-up text-2xl text-black"></i>
      </button>
    </>
  );
};

export default GoToTop;
