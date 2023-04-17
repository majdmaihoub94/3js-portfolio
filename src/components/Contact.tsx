import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Earth from './Earth'
import Card from './Card/Card'
import ContactCard from './contact-card/ContactCard';

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const HeroImg = styled.div`
flex:3;
position: relative;
`

const HeroText = styled.div`
flex:2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
gap:5px;
`
const Container = styled.div`
height: 100vh;
justify-content: center;
width: 2000px;
display: flex;
justify-content:space-between;
`

const ContactContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
`

const Contact: React.FC = () => {
    return (
        <Section >
            <Container>
                <HeroText>
                    <h1>Let's Talk</h1>
                    <ContactContainer>

                        <ContactCard img={'./img/github.png'} />
                        <ContactCard img={'./img/linkedin.png'} />
                        <ContactCard />

                    </ContactContainer>

                    <p>Feel free to contact me for any work or suggestions below</p>
                    <p>or email me directly at <a href="mailto:" style={{ color: '#ffbd59' }}> </a></p>
                </HeroText>
                <HeroImg>
                    <Canvas>

                        <OrbitControls enableZoom={false} autoRotate={true} />
                        <PerspectiveCamera makeDefault position={[2, 1, 0]} />
                        <Earth />


                    </Canvas>
                </HeroImg>
            </Container>

        </Section>
    )
}

export default Contact
