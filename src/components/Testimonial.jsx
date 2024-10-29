import styled from 'styled-components'

const Testimonial = ({text, profileImage, profileName})=>{
    return(
        <>
        <Container>
            <Wrapper>
            <Card>
                <p className='text'>{text}</p>
                <Profile>
                <img src={profileImage } alt="" />
                <p>{profileName}</p>
                </Profile>
            </Card>
            </Wrapper>
        </Container>
        </>
    )
}
export default Testimonial

const Container = styled.div`
margin-top: 2em;
display: inline;
margin-bottom: 5em;

`
const Wrapper = styled.div`
display: inline-flex;
`
const Card = styled.div`
/* display:flex; */
max-width: 300px;
border: 1px solid hsl(0 0% 80%);
outline:none;
padding: 10px 15px;
margin: 10px;
box-shadow:rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const Profile = styled.div`
display: flex;
gap: 30px;
p{
    line-height: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    /* color: floralwhite; */
    /* background-color: red; */
}
img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
`