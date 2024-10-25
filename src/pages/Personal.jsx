import Hero from "../components/Home/Info"
import Info from "../components/Home/Hero"
import TextImage from "../components/TextImage"
import simple from '../assets/simplerLife.png'
import fee from '../assets/fee.png'


const Personal = ()=>{
    return(
        <>
        <Info />
       <Hero />
       <TextImage imageRight={simple} textLeft="Your phone +
    our app +
    a debit card =
    a simpler life." />

        <TextImage textRight="Your phone is in test mode" imageLeft={fee}/>

       
       
        </>
    )
}
export default Personal