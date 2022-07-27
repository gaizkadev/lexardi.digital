import "../styles/normalize.css";
import "../styles/globals.css";
import "aos/dist/aos.css";
import "swiper/css/bundle";

import { useEffect } from "react";
import Aos from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
