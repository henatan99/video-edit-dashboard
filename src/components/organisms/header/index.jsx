import Image from 'next/image';
import styles from './styles.module.css';
import Input from '../../atoms/form_input';
import { searchInput, avatar } from './staticData';
import Avatar from '../../molecules/avatar';

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.hambergerIcon}>
                <Image src='/assets/hambergerIcon.png' width={15} height={15} />
            </div>
            <h3 className={styles.logo}>
                Logo
            </h3>
            <div className={styles.headerRight}>
                <div className={styles.inputWrapper}>
                    <Input {...searchInput}  />
                </div>
                <div>
                    <Avatar {...avatar} />
                </div>
            </div>
        </div>
    )
}

export default Header;