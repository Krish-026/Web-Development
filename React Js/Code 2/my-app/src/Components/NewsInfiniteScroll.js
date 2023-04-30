import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Proptypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const NewsInfiniteScroll = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // const [mount, setMount] = useState(true);
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    
    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);
        
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        console.log("Hello");
        props.setProgress(100);
    }
    
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`;
        updateNews();
        
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }
    return (
        <>
            <h2 className='mb-3 text-center' style={{ margin: '80px 0px' }}><b>NewsMonkey - Top from {capitalizeFirstLetter(props.category)}</b></h2>
            {loading && <Spinner></Spinner>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner></Spinner>}
            >
                <div className="container my-3">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} ></NewsItem>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

NewsInfiniteScroll.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
}

NewsInfiniteScroll.propTypes = {
    country: Proptypes.string,
    pageSize: Proptypes.number,
    category: Proptypes.string,
}

export default NewsInfiniteScroll