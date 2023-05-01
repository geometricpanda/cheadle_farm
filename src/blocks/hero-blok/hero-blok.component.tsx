import {FC} from "react";
import {Hero} from "@/components/hero";

interface HeroBlokProps {
    blok: {
        body: string;
        image: {
            alt: string;
            filename: string;
        }
    }
}

export const HeroBlok: FC<HeroBlokProps> = ({blok}) => (
    <Hero src={blok.image.filename}
          alt={blok.image.alt}
          text={blok.body}/>
)
