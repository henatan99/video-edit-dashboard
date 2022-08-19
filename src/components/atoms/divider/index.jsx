import styles from './styles.module.css';

const LabeledDivider = (props) => {
    const { label } = props;
    return (
        <div className={styles.labeledDivider}>
            <label>
                {label}
            </label>
            <hr
                className={styles.divider}
            />
        </div>
    )
}

export default LabeledDivider