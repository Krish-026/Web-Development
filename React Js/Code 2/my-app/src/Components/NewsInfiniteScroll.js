import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Proptypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class NewsInfiniteScroll extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: Proptypes.string,
        pageSize: Proptypes.number,
        category: Proptypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) { // this props is for document.title change
        super(props);
        // console.log("Infine Sroll");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;

    }

    async updateNews() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }

    render() {
        return (
            <>

                <h2 className='mb-3 text-center' style={{ margin: '35px 0px' }}><b>NewsMonkey - Top from {this.capitalizeFirstLetter(this.props.category)}</b></h2>
                {this.state.loading && <Spinner></Spinner>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner></Spinner>}
                >
                    <div className="container my-3">

                        <div className="row">
                            {this.state.articles.map((element) => {
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
}

export default NewsInfiniteScroll