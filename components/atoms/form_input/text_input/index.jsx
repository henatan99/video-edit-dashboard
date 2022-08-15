import styles from './styles.module.css'

const TextInput = (props) => {
    const { label, placeholder, icon, type, id, name } = props;
    return (
        <div className={styles.formGroup}>
            <div>
                <label
                    className={styles.inputLabel} 
                    for={name} 
                >
                    {label}
                </label>
            </div>
            <div className={styles.inputDiv}>
                <input
                    className={styles.textInput}
                    type={type} 
                    placeholder={placeholder} 
                    id={id} 
                    name={name}
                    minLength={10}
                    maxLength={30}
                />
            </div>
        </div>
    )
}

export default TextInput;
