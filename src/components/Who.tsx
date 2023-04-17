import React from 'react'
import styled from 'styled-components'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Nerd from './Nerd'
import ReactLogo from './ReactLogo'
const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
align-items: center;
`
const Container = styled.div`
height: 100vh;
justify-content: center;
width: 1400px;
display: flex;
justify-content:space-between;
`

const HeroText = styled.div`
flex:2;
display: flex;
flex-direction: column;
justify-content: center;
gap:5px;

`

const HeroImg = styled.div`
flex:2;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const Title = styled.h1`
font-size: 80px;
`

const Line = styled.img`
height: 5px;
`

const Subtitle = styled.h2`
color: #ffbd59;
`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap:10px;

`
const Desc = styled.p`
`
const Button = styled.button`
width: 200px;
padding:10px;
background-color:#ffbd59;
border: none;
color:white;
border-radius: 3px;
cursor: pointer;
font-weight: bold;
`
const Img = styled.img`
height: 600px;
width:800px;
object-fit: contain;
position: absolute;
top:0;
right:0;
bottom:0;
left:0;
margin:auto;
animation: animate 2s infinite ease alternate;
@keyframes animate {
    to{
        transform : translateY(30px)
    }
}


`

const Who: React.FC = () => {
    return (
        <Section>
            <Container>

                <HeroImg>
                    <Canvas>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={0.5} />
                        <PerspectiveCamera makeDefault position={[6, 5, 4]} />

                        <ReactLogo >

                        </ReactLogo>
                    </Canvas>
                </HeroImg>
                <HeroText>
                    <Title>Building Creative UI and makeing it a Live</Title>
                    <WhatWeDo>
                        <Line src='./img/line.png' ></Line>
                        <Subtitle>Who am I</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        I am a Frontend Developer and UI Designer. I have been working on web development for 2 years.
                        I have worked on many projects and I am always ready to work on new projects.
                    </Desc>
                    <Button>Download CV</Button>
                </HeroText>
            </Container>
        </Section>
    )
}

export default Who
