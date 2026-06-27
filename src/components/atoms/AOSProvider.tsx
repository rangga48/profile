"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
