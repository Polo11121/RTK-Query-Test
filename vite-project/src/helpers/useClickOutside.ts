import { useState, useEffect, useRef } from "react";

export const useClickOutside = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  console.log(isComponentVisible, ref);
  return { ref, isComponentVisible, setIsComponentVisible };
};
