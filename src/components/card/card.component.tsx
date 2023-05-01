import {FC} from "react";
import Image from "next/image";
import {Button} from "@/components/button";
import styles from './card.module.css';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import clsx from "clsx";

interface CardProps {
    img: string;
    alt: string;
    text: string;
    href?: string;
    hrefText?: string;
    flip?: boolean;
    marginBottom?: boolean;
}

export const Card: FC<CardProps> = ({
                                        img,
                                        alt,
                                        text,
                                        href,
                                        hrefText,
                                        flip,
                                        marginBottom,
                                    }) => (

    <div className={clsx({
        [styles['card']]: true,
        [styles['card--margin-bottom']]: marginBottom,
        [styles['card--flip']]: flip
    })}>

        <div className={styles['card__image-container']}>
            <Image
                className={styles['card__image']}
                src={img}
                alt={alt}
                fill/>
        </div>

        <div className={styles['card__body']}>
            <div className={styles['card__content']}
                 dangerouslySetInnerHTML={{__html: text}}/>

            {href && (
                <div className={styles['card__button']}>
                    <Button icon={faArrowRight}
                            href={href}>
                        {hrefText ? hrefText : 'Find out more'}
                    </Button>
                </div>
            )}

        </div>
    </div>
)
