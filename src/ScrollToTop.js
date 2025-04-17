import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scrolltotop() {
  
  const location  = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location ]);

  return null;
}