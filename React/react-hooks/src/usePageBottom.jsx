import { useEffect, useState } from "react";

export const usePageBottom = () => {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isBottom =
        Math.floor(window.innerHeight + document.documentElement.scrollTop) ===
          document.documentElement.offsetHeight ||
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
          document.documentElement.offsetHeight;
      setBottom(isBottom);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return bottom;
};
