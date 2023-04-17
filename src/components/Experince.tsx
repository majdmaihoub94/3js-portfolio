import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Tabs } from './Tabs'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
`
const Container = styled.div`
margin : 50px;
`

const Experience: React.FC = () => {
    return (
        <Section>
            <Container>
                <Tabs />
            </Container>
        </Section>
    )
}

export default Experience
