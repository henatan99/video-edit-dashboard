import PropTypes from 'prop-types';
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

LabeledDivider.propTypes = {
    label: PropTypes.string
}

export default LabeledDivider