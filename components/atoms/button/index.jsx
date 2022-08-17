import styles from './styles.module.css'

const Button = (props) => {
    const { type, text, variant, onClick } = props;
    return (
        <button 
            className={`${styles.button} ${variant === 'primary' && styles.primary}`}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;