import {Children, FC, ReactNode} from "react";
import styles from './tiles.module.css'
interface TilesProps {
    children: ReactNode
}

export const Tiles: FC<TilesProps> = ({children}) => {
    return (
        <ul className={styles['tiles']}>
            {Children.map(children, (child, index) => (
                <li key={index}
                    className={styles['tiles__item']}>
                    {child}
                </li>
            ))}
        </ul>
    )
}
