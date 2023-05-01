import {FC} from "react";
import {Container} from "@/components/container";
import {FreeText} from "@/components/free-text";
import {renderRichText} from "@storyblok/react";
import {ISbRichtext} from "@storyblok/js/dist/types/types";

interface TextBlokProps {
    blok: {
        content: ISbRichtext;
    }
}

export const TextBlok: FC<TextBlokProps> = ({blok}) => (
    <Container>
        <FreeText content={renderRichText(blok.content)}/>
    </Container>
);
