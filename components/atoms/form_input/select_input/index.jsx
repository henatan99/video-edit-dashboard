import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';

const SelectInput = (props) => {
    const { options, label, type, name, iconSrc } = props;

    const [ selected, setSelected ] = useState('Selected');
    const [ showOptions, setShowOptions ] = useState(false);

    const handleSelectClick = () => {
        setShowOptions(!showOptions);
    }

    const handleOptionClick = (e) => {
        setSelected(e.target.innerText)
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
                <div style={{ position: 'absolute', right: '1rem', bottom: 0}}>
                    <div style={{  position: 'relative', height: '1.7rem', display: 'flex'}} onClick={handleSelectClick} onBlur={() => showOptions(false)}>
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