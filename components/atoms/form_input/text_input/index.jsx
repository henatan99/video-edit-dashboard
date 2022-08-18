import Image from 'next/image';
import styles from './styles.module.css'

const TextInput = (props) => {
    const { label, placeholder, iconSrc, type, id, name, background, propState, setPropState } = props;

    const value = propState && propState[name];

    const handleChange = (e) => {
        e.preventDefault();
        const newState = {...propState}
        newState[name] = e.target.value;
        setPropState(newState);
    }
    return (
        <div className={styles.formGroup}>
            {
                label && 
                <div>
                    <label
                        className={styles.inputLabel} 
                        for={name} 
                    >
                        {label}
                    </label>
                </div>
            }
            <div className={styles.inputDiv}>
                <input
                    className={styles.textInput}
                    type={type} 
                    placeholder={placeholder} 
                    id={id} 
                    name={name}
                    minLength={1}
                    maxLength={30}
                    style={{ background: `${background}`}}
                    value={value}
                    onChange={handleChange}
                />
                <div className={styles.btnWrapper}>
                    <div className={styles.btn}>
                        <Image src={iconSrc} width={12} height={12} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextInput;
