import styled from "styled-components"
const CompanyLogo = (props)=>{
    return(
        <>
        <Container>
            <img src={props.logo} alt="" />
        </Container>
        </>
    )
}
export default CompanyLogo
const Container = styled.div`
max-width: 1280px;
/* height: 100px; */
display: inline;
align-items: center;

text-align: center;
padding-inline: 10px;
margin: 30px;
`