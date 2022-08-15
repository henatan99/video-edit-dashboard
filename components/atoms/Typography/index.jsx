import styles from './styles.module.css';

const Typography = (props) => {
    const { content } = props;
    return (
        <p className={styles.typography}>
            { content }
        </p>
    )
}

export default Typography;