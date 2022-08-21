import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const SelectInput = (props) => {
    const { options, label, type, name, iconSrc, propState, setPropState } = props;

    const [ showOptions, setShowOptions ] = useState(false);
    const selected = propState[name];

    let optionsRef = useRef();
    
    useEffect(() => {
        let handler = (event) => {
            if(!optionsRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        }
        document.addEventListener('mousedown', handler); 

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

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
        <div className={styles.selectField} ref={optionsRef}>
            <div>
                <label
                    className={styles.selectLabel} 
                    htmlFor={name} 
                >
                    {label}
                </label>
            </div>
            <div className={styles.customSelect}>
                <input className={styles.selectElem} value={selected} placeholder={selected}/>
                <div className={styles.btnWrapper}>
                    <div className={styles.btn} onClick={handleSelectClick} onBlur={() => setShowOptions(false)}>
                        <Image src={iconSrc} width={12} height={12} alt='expandable'/>
                    </div>
                </div>
            </div>
            {
                showOptions &&
                    <ul className={styles.optionsWrapper}>
                        {
                            options.map((option, index) => {
                                return (
                                    <li className={styles.optionElem} onClick={handleOptionClick} key={`${option}-${index}`}>
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
