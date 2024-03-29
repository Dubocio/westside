import React, {useState} from "react";
import { Container, LogoContainer, MenuItem, Menu, Wrapper, MenuItemLink, MobileIcon} from "./Navbar.elements";
import { FaHandMiddleFinger, FaCartPlus, FaBars, FaRegLaughWink, FaCannabis, FaTimes, FaStore } from "react-icons/fa";
import { IconContext } from "react-icons";
import {  NavLink } from 'react-router-dom';


const Navbar = () =>{
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{style:{fontSize: "2.2em"}}}>

                    
                <LogoContainer>
                    <FaHandMiddleFinger />
                    <p> WESTSIDE</p>

                </LogoContainer>
                <MobileIcon onClick={()=> setShowMobileMenu(!showMobileMenu)}>{
                    showMobileMenu ? <FaTimes /> : <FaBars />
                }
                
                </MobileIcon>
                <Menu open ={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaCannabis />
                                    <NavLink className="nav__link" to='/'>HOME</NavLink>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaStore/>
                                    
                                    <NavLink className="nav__link" to='/categoria/camisetas'>CAMISETAS</NavLink>
                                    
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaRegLaughWink />
                                    <NavLink className="nav__link" to='/categoria/shorts'>SHORTS</NavLink>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaCartPlus />
                                    <NavLink className="nav__link" to='/cart'>CARRITO</NavLink> 
                                </div>
                          </MenuItemLink>
                        </MenuItem>
                </Menu>

                </IconContext.Provider>   
            </Wrapper>
        </Container>
    );
};

export default Navbar;