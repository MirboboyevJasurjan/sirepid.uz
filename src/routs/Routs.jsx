import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Hujjatlar from "../pages/hujjatlar/Hujjatlar";
import Labs from '../pages/labs/Labs';
import Vaksinatsiya from "../pages/vaksinatsiya/Vaksinatsiya"
import Rahbarlar from "../pages/about/innerAbout/Rahbarlar"
import Hodimlar from "../pages/about/innerAbout/Hodimlar"
import Tuzulma from "../pages/about/innerAbout/Tuzulma"
import Yangiliklar from "../pages/about/innerAbout/Yangiliklar"


const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element:<About />,
  },
  {
    path: "/docs",
    element: <Hujjatlar />,
  },
  {
    path: "/labs",
    element: <Labs />,
  },
  {
    path: "/vaksinatsiya",
    element: <Vaksinatsiya />,
  },
  {
    path: "/matbuot",
    element: <>Matbuot</>,
  },
  {
    path: "/interaktiv-xizmatlar",
    element: <>Interaktiv xizmatlar</>,
  },
  {
    path: "/loyihalar",
    element: <>Loyihalar</>,
  },
  {
    path: "/muassasalar",
    element: <>Muassasalar</>,
  },
  {
    path: "/rahbarlar",
    element: <Rahbarlar />,
  },
  {
    path: "/hodimlar",
    element: <Hodimlar />,
  },
  {
    path: "/tuzulma",
    element: <Tuzulma/>,
  },
  {
    path: "/yangiliklar",
    element: <Yangiliklar />,
  },
  
]);


export default Routs

// <li><a href="#">Matbuot xizmati</a></li>
// <li><a href="#">Muassasalar</a></li>
// <li><a href="#">Loyihalar</a></li>
// <li><a href="#">Interaktiv xizmatlar</a></li>
