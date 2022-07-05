import React, {useState} from "react";
import { Container, LogoContainer, MenuItem, Menu, Wrapper, MenuItemLink, MobileIcon} from "./Navbar.elements";
import { FaHandMiddleFinger, FaBars, RiHomeSmileFill, FaStore, FaRegLaughWink, FaHandsHelping, FaCannabis, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

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
                                    HOME
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaStore />
                                    TIENDA
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaRegLaughWink />
                                    SOBRE NOSOTROS
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaHandsHelping />
                                    ¡CONTACTANOS!
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