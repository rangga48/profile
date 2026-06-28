"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        offset: 100,
      });
    };
    initAOS();
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
