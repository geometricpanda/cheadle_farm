import {FC} from "react";
import {Card} from "@/components/card";
import {ISbRichtext, renderRichText} from "@storyblok/react";
import {Container} from "@/components/container";

interface CardBlokProps {
    blok: {
        text: ISbRichtext;
        image: {
            alt: string;
            filename: string;
        }
        link: {
            story: {
                path: string;
            }
        }
        link_text: string;
        layout: 'left' | 'right';
        margin_bottom: boolean;
    }
}

export const CardBlok: FC<CardBlokProps> = ({blok}) => {
    return (
        <Container>
            <Card img={blok.image.filename}
                  alt={blok.image.alt}
                  text={renderRichText(blok.text)}
                  flip={blok.layout === 'right'}
                  marginBottom={blok.margin_bottom}
                  href={blok.link.story
                      ? blok.link.story.path
                      : undefined}
                  hrefText={blok.link_text}/>
        </Container>
    )
}
