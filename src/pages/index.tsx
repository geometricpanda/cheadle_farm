import {Text} from "@/components/text"
import {Header} from "@/components/header";
import {Hero} from "@/components/hero";

const Home = () => {
    return (
        <>
            <Header/>
            <div style={{maxWidth:'1280px',margin:'auto'}}>
            <Hero
                src={'/brown-cattle-on-green-lawn-md.jpeg'}
                alt={'picture of a cow'}
                text={'Traditional Farmhouse Meat in the Heart of Cheshire'}/>
            </div>
            </>
    )

}

export default Home
