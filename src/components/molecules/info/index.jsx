import Image from "next/image";
import styles from './styles.module.css';

const Info = (props) => {
    const { text, icon, variant } = props;

    return (
        <div className={styles.info}>
            <span className={variant === 'wide' ? styles.iconWide : styles.icon}>
                <Image src={icon} width={15} height={15} />
            </span>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Info;