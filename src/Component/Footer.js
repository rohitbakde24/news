import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFacebook,BsInstagram,BsLinkedin,BsGithub } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
  return (
    <>
    <Container fluid className='foot'>
        <p>&#169; 2022. Powerded by Rohit Bakde | <a href="mailto: bakderohit123@gmail.com" className='link'>bakderohit123@gmail.com</a> | <span ><a href='https://www.linkedin.com/in/rohit-bakde-48245b202' className='link'><BsLinkedin/></a> <a href='https://github.com/rohitbakde24' className='link'><BsGithub/></a> <a href='https://www.facebook.com/rohit.bakde.50' className='link'><BsFacebook/></a> <a href='https://www.instagram.com/roh_hit_24' className='link'><BsInstagram/></a></span>   </p>
    </Container>
    </>
  )
}

export default Footer