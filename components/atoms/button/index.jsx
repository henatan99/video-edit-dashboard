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

export default Button;