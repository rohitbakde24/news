import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const BussinessNews = () => {
    const[business,newBusiness] = useState([])

    const Mydata = async() =>{
        const response = await fetch(" https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf7f0282f7a645338440e1fae595866c")
        const business = await response.json();
        newBusiness(business.articles)
    }
    useEffect (()=>{
        Mydata();
    })
  return (
    <>
    <Container>
        <h1>hello</h1>
        {
            business.map((value)=>{
                <Row>
                    <Col>
                        <h3>{value.title}</h3>
                    </Col>
                </Row>
            })
        }
    </Container>
    </>
  )
}

export default BussinessNews