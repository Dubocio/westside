import React, {useState} from "react";
import { Container, LogoContainer, MenuItem, Menu, Wrapper, MenuItemLink, MobileIcon} from "./Navbar.elements";
import { FaHandMiddleFinger, FaBars, RiHomeSmileFill, FaStore, FaRegLaughWink, FaHandsHelping, FaCannabis, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import CartWidget from "../store/CartWidget";
import { NavLink } from 'react-router-dom';
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
                                    <CartWidget />
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
                                    <FaHandsHelping />
                                    <NavLink className="nav__link" to='/nosotros'>¡CONTACTANOS!</NavLink> 
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