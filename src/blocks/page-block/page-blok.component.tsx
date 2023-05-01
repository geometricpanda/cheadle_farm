import {StoryblokComponent} from "@storyblok/react";
import {FC} from "react";
interface PageBlokProps {
    blok: {
        content: Array<any>
    }
}

export const PageBlok: FC<PageBlokProps> = ({blok}) => (
    <>
        {blok.content
            .map((content) => (
                <StoryblokComponent key={content._uid} blok={content}/>
            ))}
    </>
);
