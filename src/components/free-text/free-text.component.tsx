import {FC} from "react";

interface FreeTextProps {
    content: string;
}

export const FreeText: FC<FreeTextProps> = ({content}) => (
    <div dangerouslySetInnerHTML={{__html: content}}/>
)
