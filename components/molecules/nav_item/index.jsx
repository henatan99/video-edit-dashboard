import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css';

const NavItem = (props) => {
    const { text, icon } = props;

    return (
        <li className={styles.item}>
            <Link href='/'>
                <a className={styles.icon}>
                    <Image src={icon} width={15} height={15} />
                </a>
            </Link>
            <Link href='/'>
                <a>
                    {text}
                </a>
            </Link>
        </li>
    )
}

export default NavItem;