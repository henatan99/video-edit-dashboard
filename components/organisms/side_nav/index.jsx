import NavList from "../../molecules/nav_list"
import { navItems } from "./staticData"
import styles from './styles.module.css'

const SideNav = () => {
    const items = navItems.items;
    return (
        <div className={styles.sideNav} style={{ height: `${navItems.height}vh`}}>
            <NavList
                navItems={items}
            />
        </div>
    )
}

export default SideNav;