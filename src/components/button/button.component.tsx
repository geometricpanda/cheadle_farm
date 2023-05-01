import {FC, ReactNode} from "react";
import Link, {LinkProps} from "next/link";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Icon} from "@/components/icon";
import styles from './button.module.css';

interface ButtonProps extends LinkProps {
    icon?: IconProp;
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
                                            children,
                                            icon,
                                            ...props
                                        }) => (
    <Link className={styles['button']} {...props}>
        {icon && <Icon icon={icon}/>}
        {children}
    </Link>
)
