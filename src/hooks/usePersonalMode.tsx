import { useState, useEffect } from "react";

export const usePersonalMode = () => {
  const [isPersonalMode, setIsPersonalMode] = useState(false);

  useEffect(() => {
    if (isPersonalMode) {
      document.documentElement.classList.add("personal-mode");
    } else {
      document.documentElement.classList.remove("personal-mode");
    }
  }, [isPersonalMode]);

  return { isPersonalMode, setIsPersonalMode };
};
