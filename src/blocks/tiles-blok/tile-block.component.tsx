import {FC} from "react";
import {StoryblokComponent} from "@storyblok/react";
import {Tile} from "@/components/tile";

interface TileBlokProps {
    blok:{
        text:string,
        image:{
            alt:string
            filename:string
        },
        link:{
            story:{
                path:string,
            }
        }
    }
}

export const TileBlok: FC<TileBlokProps> = ({blok}) => (
    <Tile
    img={blok.image.filename}
    href={blok.link.story.path}
    text={blok.text}
    />

)
