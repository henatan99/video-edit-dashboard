import EditView from "../edit_view";
import Form from "../form";
import SideNav from "../side_nav";
import styles from './styles.module.css';

const MainSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sideNav}>
                <SideNav />
            </div>
            <div className={styles.dashboard}>
                <h2 className={styles.title}>Video Edit</h2>
                <div className={styles.editView} >
                    <EditView />
                </div>
                <div className={styles.form}>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default MainSection;