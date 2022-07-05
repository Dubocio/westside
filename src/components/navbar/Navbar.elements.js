import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 70px;
background-color: #DAA520; 
border-radius: 00% 00% 40% 40%;
`;

export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin:auto;
`;


export const LogoContainer = styled.div`
margin-left: 0rem;
display: flex;
align-items: center;
font-size: 2rem;
font-family: sans-serif;
right: 40px;
p{
    &:hover{
        color: #FFF;
        transition: 0.5s all ease;
    }
};
svg {
    margin-right: 0.5rem;
};
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;
 @media screen and (max-width: 960px){
    background-color: #FFFFFF;
    position: relative;
    top: 70px;
    left: ${({open}) => open ? "0" : "-100%"};
    width: 100%;
    height: 40vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    background-color: #DAA520;
    border-radius: 00% 00% 40% 20%;
 }
`;

export const MenuItem = styled.li`
height: 100%; 
@media screen and (max-width: 960px){
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items:center;
}
`;

export const MenuItemLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.5rem 2.5rem;
font-size: 1.3rem;
font-family: sans-serif;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;

&:hover{
    color: #FFFFFF;
    box-shadow: inset 5em 1em white;
    transition: 0.17s all ease;
    
div{
    width: 5%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: left;
    svg{
        display: block;
        fill: ##DAA520;
        margin-right: 0.8rem;
}

}
@media screen and (max-width: 960px){
    width: 100%;
    div{
        width: 30%;
        justify-content: center;
        align-items: center;
        svg{
            display: flex;
        }
    }
}

@media screen and (max-witdh: 880px){
    div{
        width: 40%;
        justify-content: center;
        align-items: center;
        svg{
            display: flex;
        }
    }
}
@media screen and (max-witdh: 500px){
    div{
        width: 60%;
        justify-content: center;
        align-items: center;
        svg{
            display: flex;
        }
    }
}
@media screen and (max-witdh: 260px){
    div{
        width: 100%;
        justify-content: center;
        align-items: center;
        svg{
            display: flex;
        }
    }
}

`;

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 960px){
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        margin-right: 0.5rem;
    }
}
`