import React from 'react'
import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import Navbar from './Navbar'
import '../styles/News.css';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

const News = (props) => {

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    



    const updateNews = async (word) => {
        props.setProgress(10)
        let url='';
        if (word) {
            url = `https://newsapi.org/v2/everything?q=${word}&apiKey=${process.env.REACT_APP_APIKEY}&pageSize=${props.pageSize}`
            console.log(url)
        }
        else{
            url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_APIKEY}&page=${page}&pageSize=${props.pageSize}`
        }
         
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(50)
        console.log(parsedData)
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `NewsBuzz - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`
        updateNews()
    }, [])

    const reverseString = (str) => {
        let d = new Date(str);
        return d.toGMTString();
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_APIKEY}&page=${page + 1}&pageSize=${props.pageSize}`
        setpage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
    };



    return (
        <>
            <Navbar updateNews={updateNews} />
            <h1 className='text-center btn-dark'>NewsBuzz - Top Headlines from {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={(articles.length <= totalResults) && <Spinner />}
            >
                <div className="container my-3 btn-dark" >
                    <div className="row">
                        {articles.map((element) => {

                            return <div className="col-md-3 my-3">
                                <NewsItem title={element.title ? element.title.slice(0, 45) : "Title is not available"} description={element.description ? element.description.slice(0, 88) : "Description is not available"} imageurl={element.urlToImage ? element.urlToImage : element.urlToImage = ""} readmore={element.url} time={element.publishedAt ? reverseString(element.publishedAt) : "Time is not available"} author={element.author ? element.author : "Author is not available"} source={element.source.name} />
                            </div>

                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News