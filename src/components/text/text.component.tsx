import {FC, ReactNode} from "react";
import styles from "./text.module.css"
import clsx from "clsx";

interface TextProps {
    component?: 'p' | 'h1';
    size?: 'sm' | 'lg' | 'xl';
    color?: 'inherit';
    children: ReactNode,
    weight?: 'light' | 'bold',
}

export const Text: FC<TextProps> = ({
                                        component: Component = 'p',
                                        children,
                                        size,
                                        color,
                                        weight,
                                    }) => (
    <Component className={clsx({
        [styles['text']]: true,
        [styles['text--bold']]: weight === "bold",
        [styles['text--light']]: weight === "light",
        [styles['text--sm']]: size === "sm",
        [styles['text--lg']]: size === "lg",
        [styles['text--xl']]: size === "xl",
        [styles['text--color-inherit']]: color === "inherit",
    })}>
        {children}
    </Component>
);

