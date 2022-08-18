import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';

const SelectInput = (props) => {
    const { options, label, type, name, iconSrc, propState, setPropState } = props;

    const [ showOptions, setShowOptions ] = useState(false);
    const selected = propState[name];

    const handleSelectClick = () => {
        setShowOptions(!showOptions);
    }

    const handleOptionClick = (e) => {
        const newState = {...propState}
        newState[name] = e.target.innerText;
        setPropState(newState);
        setShowOptions(false);
    }

    return (
        <div className={styles.selectField}>
            <div>
                <label
                    className={styles.selectLabel} 
                    for={name} 
                >
                    {label}
                </label>
            </div>
            <div className={styles.customSelect}>
                <input className={styles.selectElem} value={selected} placeholder={selected}/>
                <div className={styles.btnWrapper}>
                    <div className={styles.btn} onClick={handleSelectClick} onBlur={() => showOptions(false)}>
                        <Image src={iconSrc} width={12} height={12} />
                    </div>
                </div>
            </div>
            {
                showOptions &&
                    <ul className={styles.optionsWrapper}>
                        {
                            options.map(option => {
                                return (
                                    <li className={styles.optionElem} onClick={handleOptionClick}>
                                        {option}
                                    </li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default SelectInput;
