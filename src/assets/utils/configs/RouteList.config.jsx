import NotFound from "../../../pages/NotFound";
import Home from "../../../pages/Home";
export const routes = [
  {
    navName: "Home",
    page: <Home title={"Home Page"} />,
    navbarVisibility: true,
    link: "/",
  },
  {
    navName: "Not Found",
    page: <NotFound title={"Page Not Found"} />,
    navbarVisibility: false,
    link: "/404",
  },
  {
    navName: "Not Found",
    page: <NotFound title={"Page Not Found"} />,
    navbarVisibility: false,
    link: "/*",
  },
];
