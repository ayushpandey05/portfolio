import { useEffect, useState } from "react";

const useWindowDimensions = () => {
  const [state, setState] = useState({ width: 1366, height: 768 });

  useEffect(() => {
    const resizeApp = () => {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setState(dimensions);
    };

    window.addEventListener("resize", resizeApp);
    resizeApp();
    return () => {
      window.removeEventListener("resize", resizeApp);
    };
  }, []);
  return { ...state };
};

export { useWindowDimensions };
