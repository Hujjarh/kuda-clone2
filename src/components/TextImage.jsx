import styled from 'styled-components'

const TextImage = (props)=>{
    return(
        <>
        <Container>
            <Wrapper>
                <Textimage>   
                    <h1 style={{whiteSpace: 'pre-line'}}>{props.text}</h1>
                    <p style={{whiteSpace:'pre-line'}}>{props.para}</p>
                </Textimage>

                <ImageRight>
                <img src={props.image} alt="/" />
                </ImageRight>
                
            </Wrapper>
        
        </Container>
        
        </>
    )
}
export default TextImage

const Container = styled.div`
 max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    min-height: calc(100vh - 70px);
    /* margin-block: 1em; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Wrapper = styled.div`
width: 85%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-left: 100px;
gap:10em;
`
const Textimage = styled.div`
max-width: 400px;
display: flex;
flex-direction: column;
h1{
font-size: 35px;
font-weight: 800;
line-height: normal;
line-break: auto;
color:#40196D;
margin-bottom: -5px;
}
p{
    font-size: 18px;
}
 

`
const ImageRight = styled.div`
img{
    width: 500px;
}
`