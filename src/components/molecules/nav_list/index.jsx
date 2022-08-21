import NavItem from "../nav_item";

const NavList = (props) => {
    const { navItems } = props;

    return (
        <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: 'inherit'}}>
            {
                navItems.map((nav, index) => {
                    return (
                        <NavItem
                            text={nav.text}
                            icon={nav.icon}
                            key={`${nav.text}-${index}`}
                        />
                    )
                })
            }
        </ul>
    )
}

export default NavList