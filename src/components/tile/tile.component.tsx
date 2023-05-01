import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './tile.module.css';

interface TileProps {
    img: string;
    text: string;
    href: string;
}

export const Tile: FC<TileProps> = ({img, text, href}) => (
    <Link href={href}
    className={styles['tile']}>
        <span
        className={styles['tile__img-container']}>
            <Image
                className={styles['tile__img']}
                fill
                src={img}
                alt={''}/>
        </span>
        <span
        className={styles['tile__text']}>
            {text}
        </span>
    </Link>
)
