import {FC} from "react";
import {StoryblokComponent} from "@storyblok/react";
import {Tiles} from "@/components/tile";
import {Container} from "@/components/container";

interface TilesBlokProps {
    blok: {
        tiles: Array<any>
    }
}

export const TilesBlok: FC<TilesBlokProps> = ({blok}) => {
    return (
        <Container>
            <Tiles>
                {blok.tiles
                    .map((tile) => (
                        <StoryblokComponent key={tile._uid} blok={tile}/>
                    ))}
            </Tiles>
        </Container>
    )
}
