import Info from "../info";
import NavList from "../nav_list";
import LabeledDivider from "../../atoms/divider";
import styles from './styles.module.css';

const AvatarDropdown = (props) => {
    const { dropdowns } = props;

    return (
        <div className={styles.avatarDiv}>
            <Info text={dropdowns.user.name} icon={dropdowns.user.icon} />
            <LabeledDivider />
            <NavList navItems={dropdowns.navItems} />
        </div>
    )
}

export default AvatarDropdown;