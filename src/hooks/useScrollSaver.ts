const useScrollSaver = () => {
  const initScroll = () => {
    const originScrolls = sessionStorage.getItem("poomasi-scroll-index");
    if (!originScrolls) {
      sessionStorage.setItem("poomasi-scroll-index", JSON.stringify({}));
    }
  };

  const setScroll = (location: string, scroll: number) => {
    initScroll();
    const scrolls = sessionStorage.getItem("poomasi-scroll-index");
    const scrollsObj = JSON.parse(scrolls || "{}");
    scrollsObj[location] = scroll;
    sessionStorage.setItem("poomasi-scroll-index", JSON.stringify(scrollsObj));
  };

  const getScroll = (location: string) => {
    const scrolls = sessionStorage.getItem("poomasi-scroll-index");
    const scroll = JSON.parse(scrolls || "{}")[location];
    return scroll || 0;
  };

  return { initScroll, setScroll, getScroll };
};

export default useScrollSaver;
