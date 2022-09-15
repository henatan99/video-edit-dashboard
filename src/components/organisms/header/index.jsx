import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import Input from '../../atoms/form_input';
import { searchInput, avatar, avatarDropdowns } from './staticData';
import Avatar from '../../molecules/avatar';
import { useState } from 'react';
import SideNav from '../side_nav';
import AvatarDropdown from '../../molecules/avatar_dropdown';

const Header = () => {
    const [expandUser, setExpandUser] = useState(false);
    const [expandHamberger, setExpandHamberger] = useState(false);

    const handleHambergerClick = () => {
        setExpandHamberger(!expandHamberger)
    }

    const handleAvatarExpand = () => {
        setExpandUser(!expandUser);
    }

    return (
        <div className={styles.header}>
            <button className={styles.hambergerIcon} onClick={handleHambergerClick}>
                <Image src='/assets/hambergerIcon.png' width={15} height={15} alt='hambergerIcon'/>
            </button>
            <div>
                <Link href='/data_table'>To Data Table</Link>
            </div>
            {
                expandHamberger && 
                <div className={styles.expandNav}>
                    <SideNav />
                </div>
            }
            <h3 className={styles.logo}>
                Logo
            </h3>
            <div className={styles.headerRight}>
                <div className={styles.inputWrapper}>
                    <Input {...searchInput}  />
                </div>
                <div className={styles.avatarWrapper}>
                    <Avatar {...avatar} onExpand={handleAvatarExpand} />
                    {
                        expandUser && 
                        <div className={styles.avatarDropdowns}>
                            <AvatarDropdown dropdowns={avatarDropdowns} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;