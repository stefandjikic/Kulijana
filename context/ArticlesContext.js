import { getFeaturedArticles } from "@/graphQL";
import React, { createContext, useContext, useState, useEffect } from "react";

const ArticlesContext = createContext();

export const ArticlesContextProvider = ({ children }) => {
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getFeaturedArticles();
      setFeaturedArticles(res);
    };
    fetchAPI();
  }, []);

  return (
    <ArticlesContext.Provider value={{ featuredArticles, setFeaturedArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
