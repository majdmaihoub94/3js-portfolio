import React, { Suspense } from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
const data = [
    'WEBSITE DESIGN', 'MOBILE DESIGN', 'UI/UX DESIGN'
]

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
justify-items: center;
`
const ListSide = styled.div`
flex: 1;
display: flex;
align-items: center;

`

const ImageSide = styled.div`
flex:3;
position: relative;
`
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap:20px;
`
const ListItem = styled.li`
font-size: 70px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;
white-space: nowrap;

::after{
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left:0;
    color: #ffbd59;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
}



&:hover{
    ::after{
      animation : moveText 0.5s linear both;
      @keyframes moveText{
        to{
        width: 100%;

        }  
    }
}
}
`

const Work: React.FC = () => {
    const [work, setWork] = React.useState(data[0])


    const handleWork = (item: string) => {
        switch (item) {
            case 'WEBSITE DESIGN':
                {
                    return (
                        <Card img={"./img/web.png"} />
                    )
                }


            case 'MOBILE DESIGN':
                {
                    return (
                        <Card img={"./img/mobile.png"} />
                    )
                }
            case 'UI/UX DESIGN':
                {
                    return (
                        <Card img={"./img/ux.png"} />
                    )
                }
            default:
                break;

        }



    }

    return (
        <Section>
            <Container>
                <ListSide>
                    <List>
                        {data.map((item) =>
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>
                                {item}
                            </ListItem>)}
                    </List>
                </ListSide>
                <ImageSide>
                    {handleWork(work)}

                </ImageSide>
            </Container>
        </Section>
    )
}

export default Work
