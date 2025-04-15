import "@/styles/globals.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: "url('/grid.svg')",
        backgroundSize: "32px 32px",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}
