import React, { Suspense } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
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
flex:3;
position: relative;
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

const Hero: React.FC = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <HeroText>
                    <Title>Hi I'm Majd 🤓 </Title>
                    <WhatWeDo>
                        <Line src='./img/line.png' ></Line>
                        <Subtitle>What I do</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        I am a UI/UX Designer and Front-end Developer.
                        I love to design and code beautiful and functional websites and apps.
                    </Desc>
                    <Button>
                        Know me better
                    </Button>
                </HeroText>
                <HeroImg>
                    <Canvas>
                        <Suspense fallback={null}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.4}>
                                <MeshDistortMaterial
                                    color="#e5a10e"
                                    attach="material"
                                    distort={0.5}
                                    speed={2}
                                />
                            </Sphere>
                        </Suspense>
                    </Canvas>
                    <Img src='./img/hero2.png' />
                </HeroImg>
            </Container>
        </Section>
    )
}

export default Hero
