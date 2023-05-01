import {FC, ReactNode} from "react";
import styles from "./container.module.css";
import clsx from "clsx";

interface ContainerProps {
    e2e?:boolean,
    children:ReactNode
}
export const Container:FC<ContainerProps> = ({children,e2e}) => {
    return (
        <div className={clsx({
            [styles['container']]:true,
            [styles['container--e2e']]:e2e,
        }) }>
            {children}
        </div>
    )
}
