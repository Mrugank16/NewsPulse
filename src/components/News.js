// src/components/News.js

import { React, useState, useEffect, useCallback } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "../css/News.css";

function News(props) {
	let category = props.category;
	let [articles, setArticles] = useState([]);
	let [totalResults, setTotalResults] = useState(0);
	let [page, setPage] = useState(1);

	let resultNews = useCallback(async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=a9e0bf08484842a4b2d99753d25559eb`;
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
	}, [category, page]);

	useEffect(() => {
		resultNews();
	}, [resultNews]);

	let fetchData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page + 1}&apiKey=a9e0bf08484842a4b2d99753d25559eb`;
		setPage(page + 1);
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(articles.concat(parsedData.articles));
	};

	return (
		<InfiniteScroll
			dataLength={articles.length}
			next={fetchData}
			hasMore={articles.length < totalResults}
			loader={<h4 className="text-center">Loading...</h4>}
			endMessage={
				<div class="center-container">
        			<div class="pyramid-loader">
            			<div class="wrapper">
                			<span class="side side1"></span>
                			<span class="side side2"></span>
                			<span class="side side3"></span>
                			<span class="side side4"></span>
                			<span class="shadow"></span>
            			</div>
        			</div>
    			</div>
			}
		>
			<div className="container my-3">
				<div className="row">
					{articles.map((element) => {
						return (
							<div className="col-md-4" key={element.url}>
								<NewsItem
									sourceName={element.source.name}
									title={element.title}
									desc={element.description}
									imageURL={element.urlToImage ? element.urlToImage : Image}
									newsUrl={element.url}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</InfiniteScroll>
	);
}

export default News;
