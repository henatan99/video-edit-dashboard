import NavItem from "../nav_item";

const NavList = (props) => {
    const { navItems } = props;

    return (
        <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: 'inherit'}}>
            {
                navItems.map(nav => {
                    return (
                        <NavItem
                            text={nav.text}
                            icon={nav.icon}
                        />
                    )
                })
            }
        </ul>
    )
}

export default NavList