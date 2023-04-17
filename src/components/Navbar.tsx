import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
 display: flex;
 justify-content: center;    
`

const Container = styled.div`
width:1400px;
display: flex;
justify-content : space-between;
align-items: center;
padding: 20px 0;
`
const Logo = styled.img`
height: 50px;
`

const Links = styled.div`
display: flex;
align-items:center;
gap:20px;
`



const Icons = styled.div`
display: flex;
align-items:center;
gap:20px;
`

const Icon = styled.img`
width: 20px;
cursor: pointer;
`

const Button = styled.button`
width: 100px;
padding:10px;
background-color:#ffbd59;
border: none;
color:white;
border-radius: 3px;
cursor: pointer;
`

const List = styled.ul`
display: flex;
gap: 20px ;
list-style: none;
`

const ListItem = styled.li`
    
`

const Navbar: React.FC = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src='./img/logo1.png' alt='logo' />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Work</ListItem>
                        <ListItem>Who</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src='./img/search.png' width={50} alt='linkedin-majd' />
                    <Button>Hire Me</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar
