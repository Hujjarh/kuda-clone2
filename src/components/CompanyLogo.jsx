import styled from "styled-components"
import tec from '../assets/TEC.png'
import forum from '../assets/economic-forum.png'
import fintech from '../assets/fintech.png'
import bbc from '../assets/bbc.png'
import cnbc from '../assets/cnbc.png'
import euromoney from '../assets/euromoney.png'
const CompanyLogo = (props)=>{
    return(
        <>
        <Container>
            <img src={tec} alt="" />
            <img src={forum} alt="" />
            <img src={fintech} alt="" />
            <img src={bbc} alt="" />
            <img src={cnbc} alt="" />
            <img src={euromoney} alt="" />
        </Container>
        </>
    )
}
export default CompanyLogo
const Container = styled.div`
max-width: 1280px;
height: 100px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
/* background-color: red; */
text-align: center;
padding-inline: 10px;
margin: 30px;
overflow: auto;
align-items: center;
gap: 10px;
`