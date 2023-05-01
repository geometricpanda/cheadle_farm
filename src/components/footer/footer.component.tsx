import {Container} from "@/components/container";
import {Text} from "@/components/text";
import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <Container>
                <div className={styles['footer__container']}>
                    <Text size={"sm"} color={'inherit'}>
                        &copy; Copyright 2023
                    </Text>
                    <Text size={"sm"} color={'inherit'}>
                        Traditional Farmhouse Meat, Cheadle Farm, Nether Peover, Knutsford, Cheshire, WA16 9SN
                    </Text>
                </div>
            </Container>
        </footer>
    )
}
