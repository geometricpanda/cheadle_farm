import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FC} from "react";
import styles from './icon.module.css'
import clsx from "clsx";

interface IconProps {
    icon:IconProp
}

export const Icon:FC<IconProps> = ({icon}) =>(
    <span
    className={clsx({
        [styles['icon']]:true,
    })}>
        <FontAwesomeIcon icon={icon}/>
    </span>
)
