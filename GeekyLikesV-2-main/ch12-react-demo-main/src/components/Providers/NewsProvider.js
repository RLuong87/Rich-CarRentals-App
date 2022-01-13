import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';

const NewsContext = React.createContext({});

const NewsProvider = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("javascript");

  useEffect(() => {
    // get the news from the api.
    const getNews = async (query) => {
      try {
        const res = await axios.get(`http://localhost:8080/api/test/news/${query}`);
        setArticles(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    setLoading(true)
    getNews(query)

  }, [query]);

  // {articles, loading} == {articles: articles, loading: loading}
  return (
    <NewsContext.Provider value={{articles, loading, setQuery}}> 
      {props.children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
