import styles from './styles.module.css'

const Button = (props) => {
    const { text, variant } = props;
    return (
        <button 
            className={`button` `${variant === 'primary' && styles.primary}`}
            type="submit"
        >
            {text}
        </button>
    )
}

export default Button;