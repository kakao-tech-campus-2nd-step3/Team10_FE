import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useScrollSaver from "@hooks/useScrollSaver";

const ScrollSaver = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);
  const { getScroll, setScroll } = useScrollSaver();

  useEffect(() => {
    setScroll(prevLocation, window.scrollY);
    setPrevLocation(location.pathname);
    window.scrollTo(0, getScroll(location.pathname));
  }, [location]);

  return null;
};

export default ScrollSaver;
