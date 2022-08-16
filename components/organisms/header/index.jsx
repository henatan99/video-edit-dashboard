import styles from './styles.module.css';
import Input from '../../atoms/form_input';
import { searchInput, avatar } from './staticData';
import Avatar from '../../molecules/avatar';

const Header = () => {

    return (
        <div className={styles.header}>
            <h3 style={{ marginBlockStart: 0, marginBlockEnd: 0}}>
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