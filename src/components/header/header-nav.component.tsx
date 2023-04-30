import Link from "next/link";
import styles from './header-nav.module.css'

type Links = Array<{ text: string, href: string }>
export const HeaderNav = () => {
    const links: Links = [
        {text: 'Home', href: '/'},
        {text: 'About Us', href: '/about-us'},
        {text: 'Markets', href: '/markets'},
        {text: 'Products', href: '/products'},
        {text: 'Visit', href: '/visit'},
        {text: 'Contact Us', href: '/contact-us'},
    ]
    return (
        <nav className={styles['nav']}>
            <ul className={styles['nav__links']}>
                {links.map(({text, href}) => (
                    <li
                        className={styles['nav__links-item']}
                        key={text}>
                        <Link
                            className={styles['nav__link']}
                            href={href}>
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


