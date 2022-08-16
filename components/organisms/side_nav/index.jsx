import NavList from "../../molecules/nav_list"
import { navItems } from "./staticData"

const SideNav = () => {
    const items = navItems.items;
    return (
        <div style={{ height: `${navItems.height}vh`}}>
            <NavList
                navItems={items}
            />
        </div>
    )
}

export default SideNav;