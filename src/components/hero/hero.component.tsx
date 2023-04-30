import styles from './hero.module.css'
import {Text} from "@/components/text";
import Image from "next/image";
import {FC} from "react";

interface HeroProps {
    src: string;
    alt: string;
    text: string;
}

export const Hero: FC<HeroProps> = (
    {src, alt, text}
) => (
    <div className={styles['hero']}>
        <div className={styles['hero__bg']}>
            <Image
                className={styles['hero__bg-img']}
                src={src}
                alt={alt}
                fill
            />
        </div>
        <div className={styles['hero__text']}>
            <Text component={'h1'}
                  size={'xl'}
                  weight={'bold'}
                  color={'inherit'}>
                {text}
            </Text>
        </div>
    </div>
)
