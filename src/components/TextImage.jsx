import styled from 'styled-components'

const TextImage = (props)=>{
    return(
        <>
        <Container>
            <Wrapper>
                <Textimage>   
                    <h1>{props.textLeft}</h1>
                    <p>{props.paraLeft}</p>
                </Textimage>

                <ImageRight>
                <img src={props.imageRight} alt="/" />
                </ImageRight>
                <Divider>
                    <ImageLeft>
                        <img src={props.imageLeft} alt="" />
                    </ImageLeft>
                    <ImageText>
                        <h1>{props.textRight}</h1>
                        <p>{props.paraRIght}</p>
                    </ImageText>
                </Divider>
                
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
    margin-block: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
/* width: 85%; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Textimage = styled.div`
max-width: 500px;
display: flex;

`
const ImageRight = styled.div`
img{
    width: 400px;
}
`
const Divider = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 20px;

`
const ImageLeft = styled.div`
img{
    width: 400px;
}
`
const ImageText = styled.div``