import Hero from "../components/Home/Info"
import Info from "../components/Home/Hero"
import TextImage from "../components/TextImage"
import simple from '../assets/simplerLife.png'
import manage from '../assets/manage.png'
import piggy from '../assets/piggy.png'
import blockCard from '../assets/blockCard.png'
import happy from '../assets/happy.png'
import fee from '../assets/fee.png'
import fatimah from '../assets/fatimah.jpg'
import ImageText from "../components/ImageText"
import Testimonial from "../components/Testimonial"
import CompanyLogo from '../components/CompanyLogo'
import tec from '../assets/TEC.png'
import forum from '../assets/economic-forum.png'
import fintech from '../assets/fintech.png'
import bbc from '../assets/bbc.png'
import cnbc from '../assets/cnbc.png'
import euromoney from '../assets/euromoney.png'


const Personal = ()=>{
    return(
        <>
        <Info />
       <Hero />
       <TextImage image={simple}
        text={"Your phone +\n our app +\n a debit card =\n a simpler life."}
        para="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."/>

        <ImageText text="It's your money, we just help you manage it." 
        image={manage}
        para={"Save it, spend it, send it. It's up to you.\n Whatever you choose to do with your money,\n we'll make sure it's done better and free of charge. We take responsibility for that."}/>

        <TextImage image={piggy}
                text="Save money as you spend it, seriously."
                para="You can't avoid spending. That's how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow."/>

        <ImageText text="Turn off access, turn on safety." 
                image={blockCard}
                para={"Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We'd like to see them try."}/>
        <TextImage image={happy}
                text="We're always happy to help you."
                para="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there'll always be a friendly person there to make your life easy."/>
        <ImageText text="Fees as clear as glass." 
                image={fee}
                para={"We're serious about free banking, and we will never, ever charge you for anything without your consent."}/>
        <h1 style={{color:'#40196D', textAlign:'center', fontWeight:800}}>Don't just take our words for it</h1>
        <Testimonial text= "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek" profileName="Babajide Duroshola" profileImage={fatimah}/>
        <Testimonial text= "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek" profileName="Babajide Duroshola" profileImage={fatimah}/>
        <Testimonial text= "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek" 
    profileName="Babajide Duroshola" profileImage={fatimah}/>
        <Testimonial text= "Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek" 
    profileName="Babajide Duroshola" profileImage={fatimah}/>
    <CompanyLogo logo={tec} />
            <CompanyLogo logo={forum}/>
            <CompanyLogo logo={fintech}/>
            <CompanyLogo logo={bbc}/>
            <CompanyLogo logo={cnbc}/>
            <CompanyLogo logo={euromoney}/>
        
            </>
    )
}
export default Personal