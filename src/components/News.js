import React, { useState, useEffect, useCallback } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "../css/News.css";

function News(props) {
    const { category } = props;
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const resultNews = useCallback(async () => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const parsedData = await response.json();
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }, [category, page, apiKey]);

    useEffect(() => {
        resultNews();
    }, [resultNews]);

    const fetchData = async () => {
        try {
            const nextPage = page + 1;
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${nextPage}&apiKey=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const parsedData = await response.json();
            setArticles(prevArticles => prevArticles.concat(parsedData.articles));
            setPage(nextPage);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={articles.length < totalResults}
            loader={<h4 className="text-center">Loading...</h4>}
            endMessage={
                <div className="center-container">
                    <div className="pyramid-loader">
                        <div className="wrapper">
                            <span className="side side1"></span>
                            <span className="side side2"></span>
                            <span className="side side3"></span>
                            <span className="side side4"></span>
                            <span className="shadow"></span>
                        </div>
                    </div>
                </div>
            }
        >
            <div className="container my-3">
                <div className="row">
                    {articles.map((element) => (
                        <div className="col-md-4" key={element.url}>
                            <NewsItem
                                sourceName={element.source.name}
                                title={element.title}
                                desc={element.description}
                                imageURL={element.urlToImage ? element.urlToImage : Image}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </InfiniteScroll>
    );
}

export default News;
