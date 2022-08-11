import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedin, FaUserFriends } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';

const Box = styled.div`
  padding: 10px 10px;
  background: #DAA520;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media (max-width: 1000px) {
    padding: 30px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Flinks = styled.a`
  color: black;
  margin-bottom: 5px;
  font-size: 12px;
  text-decoration: none;
  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Sobre mi:</Heading>
            <Flinks>Marcio Ivan Dubokovic</Flinks>
          </Column>
          <Column>
            <Heading>Tecnologias</Heading>
            <Flinks>HTML</Flinks>
            <Flinks>CSS</Flinks>
            <Flinks>Javascript</Flinks>
            <Flinks>ReactJs</Flinks>
          </Column>
          <Column>
            <Heading>Tienda</Heading>
            <Flinks><FaUserFriends/><NavLink className="nav__link" to='/'>Productos en Stock</NavLink></Flinks>
            <Flinks><FaUserFriends/><NavLink className="nav__link" to='/categoria/camisetas'>Camisetas</NavLink></Flinks>
            <Flinks><FaUserFriends/><NavLink className="nav__link" to='/categoria/shorts'>Shorts</NavLink></Flinks>
          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
            <Flinks href='https://github.com/Dubocio'>
              <i className='fab fa-facebook-f'>
                <FaGithub/>
                <span style={{ marginLeft: '10px' }}>GitHub</span>
              </i>
            </Flinks>
            <Flinks href='https://www.instagram.com/dubocio/'>
              <i className='fab fa-instagram'>
                <FaInstagram/>
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </Flinks>
            <Flinks href='https://www.linkedin.com/in/mdubokovic/'>
              <i className='fab fa-youtube'>
                <FaLinkedin/>
                <span style={{ marginLeft: '10px' }}>LinkedIn</span>
              </i>
            </Flinks>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};