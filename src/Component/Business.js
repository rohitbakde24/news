import React from 'react'
import { useState,useEffect } from "react"
import { Row,Col, Container } from "react-bootstrap"
import './Home.css'

const Business = () => {
    const [news,newNews] = useState([])
        const Myfun =async() => {
            const response =await fetch("https://newsapi.org/v2/top-headlines?country=in&category=Business&apiKey=375368ae21c2405185e0693370f8115f")
            const news = await response.json()
            newNews(news.articles)
    }
    useEffect(()=>{
        Myfun();
    })   

  return (
    <>
<Container>
        {news.map((value)=>
        <Row className="myRows">
            <Col>
                <h3>{value.title}</h3>
                <p>{value.description}<br/>{value.publishedAt}</p>
                
                <a href={value.url} className="view-more">view more <span className="arrow">&#10148;</span></a>
            </Col>
            <Col className='myclass'>
                <img src={value.urlToImage} style={{width:500,height:270}}/>
            </Col>
        </Row>
        )}
        </Container> 
    </>
  )
}

export default Business