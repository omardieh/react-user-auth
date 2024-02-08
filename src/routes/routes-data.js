import Home from "./../pages/Home";
import Dashboard from "./../pages/Dashboard";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import Logout from "./../pages/Logout";

export const routes = [
  { path: "/", Element: Home },
  {
    path: "/dashboard",
    Element: Dashboard,
  },
  {
    path: "/login",
    Element: Login,
  },
  { path: "/register", Element: Register },
  {
    path: "/logout",
    Element: Logout,
  },
];
