import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start); // fires off when user loads to a new page
Router.events.on("routeChangeComplete", progress.finish); // finish point when load is finished
Router.events.on("routeChangeError", progress.finish); // finishes if there is an error

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
