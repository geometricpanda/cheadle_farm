import {Header} from "@/components/header";
import {Hero} from "@/components/hero";
import {Tile, Tiles} from "@/components/tile";
import {Card} from "@/components/card";
import {Container} from "@/components/container/container.component";
import {Footer} from "@/components/footer";

const Home = () => {
    return (
        <>
            <Header/>
            <Hero
                src={'/brown-cattle-on-green-lawn-md.jpeg'}
                alt={'picture of a cow'}
                text={'Traditional Farmhouse Meat in the Heart of Cheshire'}/>
            <Container>
                <Tiles>
                    <Tile img={'/brown-cattle-on-green-lawn-md.jpeg'} text={'Weekly Markets'} href={'/markets'}/>
                    <Tile img={'/brown-cattle-on-green-lawn-md.jpeg'} text={'Weekly Markets'} href={'/markets'}/>
                </Tiles>
            </Container>
            <Container e2e>
                <Card
                    text={'<p>We provide sustainable free range beef and locally sourced Lamb, Pork, and Chicken through our on site shop in Knutsford and to local Cheshire farmers markets.</p>'}
                    alt={'picture of a cow'}
                    img={'/brown-cattle-on-green-lawn-md.jpeg'}
                    href={'/markets'}
                />
            </Container>
            <Container>
                <Tiles>
                    <Tile img={'/brown-cattle-on-green-lawn-md.jpeg'} text={'Weekly Markets'} href={'/markets'}/>
                    <Tile img={'/brown-cattle-on-green-lawn-md.jpeg'} text={'Weekly Markets'} href={'/markets'}/>
                </Tiles>
            </Container>
            <Container e2e>
                <Card
                    text={'<p>We provide sustainable free range beef and locally sourced Lamb, Pork, and Chicken through our on site shop in Knutsford and to local Cheshire farmers markets.</p>'}
                    alt={'picture of a cow'}
                    img={'/brown-cattle-on-green-lawn-md.jpeg'}
                    href={'/markets'}
                    flip
                />
            </Container>
            <Container>
                <Tiles>
                    <Tile img={'/brown-cattle-on-green-lawn-md.jpeg'} text={'Weekly Markets'} href={'/markets'}/>
                    <Tile img={'/brown-cattle-on-green-lawn-md.jpeg'} text={'Weekly Markets'} href={'/markets'}/>
                </Tiles>
            </Container>
            <Footer/>
        </>
    )

}

export default Home
