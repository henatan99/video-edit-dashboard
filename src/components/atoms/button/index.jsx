import PropTypes from 'prop-types';
import styles from './styles.module.css'

const Button = (props) => {
    const { type, text, variant, onClick, name } = props;
    return (
        <button 
            className={`${styles.button} ${variant === 'primary' && styles.primary}`}
            type={type}
            onClick={onClick}
            name={name}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string
}

export default Button;