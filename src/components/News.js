import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=> {
  const [articles, setarticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // 
  

  
  const  updateNews= async ()=> {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=57fa7dda5d69467684c163c7d8f1c75b&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json()
    console.log(parsedData)
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100)
  }
  useEffect(()=>{
    document.title=`${props.category}-NewsMan`;
    updateNews();
  }, [])
  

  // const handleClickNext = async () => {
  //   setPage(page+1)
  //   updateNews()
  // }
  // const handleClickPrevious = async () => {
  //   setPage(page-1)
  //   updateNews();
  // }
  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=57fa7dda5d69467684c163c7d8f1c75b&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    setarticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };

    // console.log("render")
    return (
      <div className="container my-3">
        <h2 style={{margin: "100px auto"}} className='text-center'>NewsMan - Top headlines from {props.category}</h2>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
        <div className='row'>
          {articles.map((element) => {
            return <div className='col-md-4' key={element.url} >
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) + "..." : " "} imageurl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} />
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        

      </div>
    )
  
}
News.defaultPtops = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number
}

export default News
