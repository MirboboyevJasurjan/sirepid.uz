import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Rahbarlar from "../pages/about/innerAbout/Rahbarlar"
import Hodimlar from "../pages/about/innerAbout/Hodimlar"
import Tuzulma from "../pages/about/innerAbout/Tuzulma"

import Hujjatlar from "../pages/hujjatlar/Hujjatlar";
// Tashkilot hujjatlari

import Matbuot from "../pages/matbuot/Matbuot";
import Yangiliklar from "../pages/matbuot/innerMatbuot/Yangiliklar"
import Fotolavhalar from "../pages/matbuot/innerMatbuot/Fotolavhalar"
import Videolavhalar from "../pages/matbuot/innerMatbuot/Videolavhalar"

// Loyihalar
// Interaktiv hizmatlar

import Labs from '../pages/labs/Labs';
import Vaksinatsiya from "../pages/vaksinatsiya/Vaksinatsiya"



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
    element: <Matbuot />,
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
  {
    path: "/fotolavhalar",
    element: <Fotolavhalar />,
  },
  {
    path: "/videolavhalar",
    element: <Videolavhalar />,
  },
  {
    path: "/matbuot-bog-lanish",
    element: <>Matbuot hizmati bilan bog'lanish</>,
  },
  
]);


export default Routs