import {FC, ReactNode} from "react";
import styles from "./container.module.css";
import clsx from "clsx";

interface ContainerProps {
    children:ReactNode
}
export const Container:FC<ContainerProps> = ({children}) => {
    return (
        <div className={clsx({
            [styles['container']]:true,
        }) }>
            {children}
        </div>
    )
}
