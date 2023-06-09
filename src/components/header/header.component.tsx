import styles from "./header.module.css"
import {MouseEventHandler, useCallback, useEffect, useRef} from "react";
import {Icon} from "@/components/icon";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {HeaderNav} from "./header-nav.component";
import {useKey} from "react-use";
import {Logo} from "@/components/logo";
import {useRouter} from "next/router";
import Link from "next/link";

export const Header = () => {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleOpen = useCallback(() => {
        dialogRef.current?.showModal();
    }, []);

    const handleClose = useCallback(() => {
        dialogRef.current?.close();
    }, []);

    useEffect(() => {
        handleClose()
    }, [handleClose, router.asPath])

    const handleDialogClick: MouseEventHandler = useCallback(({clientX}) => {
        const dialogWidth = dialogRef.current?.getBoundingClientRect().width;

        if (dialogWidth && clientX > dialogWidth) {
            handleClose();
        }
    }, [handleClose]);

    useKey('esc', handleClose);


    return (
        <>
            <header className={styles['header']}>
                <div className={styles['header__menu']}>
                    <button
                        aria-haspopup={'menu'}
                        title={'Menu'}
                        className={styles['header__button']}
                        onClick={handleOpen}>
                        <Icon icon={faBars}/>
                    </button>
                </div>
                <div className={styles['header__text']}>
                    <div className={styles['header__logo']}>
                        <Logo/>
                    </div>
                    <Link
                        className={styles['header__link']}
                        href={'/'}>Cheadle Farm</Link>
                </div>
                <div className={styles['header__tel']}>
                    <a
                        title={'Call Us'}
                        href='tel:+441565722228'
                        className={styles['header__button']}>
                        <Icon icon={faPhone}/>
                    </a>
                </div>
                <div className={styles['header__links']}>
                    <HeaderNav/>
                </div>
            </header>
            <dialog
                onClick={handleDialogClick}
                aria-label={'Site Menu'}
                ref={dialogRef}
                className={styles['dialog']}>
                <button
                    onClick={handleClose}
                    className={styles['dialog__close']}>
                    <Icon icon={faTimes}/>
                </button>
                <HeaderNav/>
            </dialog>
        </>
    )
}
