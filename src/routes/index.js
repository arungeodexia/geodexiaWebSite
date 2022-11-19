import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import Pricing from "../pages/pricing";
import Team from "../pages/team";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/team",
      element: <Team />,
    },
  ]);
}
