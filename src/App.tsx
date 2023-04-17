import { useState } from 'react'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Work from './components/Work'
import styled from 'styled-components'
import './app.scss'
import Experience from './components/Experince'

const Container = styled.div`
height: 100vh;
color: #ffffff;
background-image: url('./img/bg2.jpg');
background-size: cover;
margin: 0;
padding: 0;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
`

function App() {

  return (
    <Container >
      <Hero />
      <Who />
      <Experience />
      <Work />
      <Contact />

    </Container>
  )
}

export default App
