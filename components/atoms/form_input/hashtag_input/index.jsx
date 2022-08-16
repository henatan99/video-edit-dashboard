import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css'

const HashTagInput = (props) => {
    const [hashTags, setHashTags] = useState([]);
    const { label, placeholder, iconSrc, type, id, name } = props;
    const [hashTag, setHashTag] = useState();

    const handleAddHashTag = (e) => {
        e.preventDefault();
        if(hashTag && hashTag.length > 0) {
            setHashTags([...hashTags, hashTag])
        }
        setHashTag('');
    }

    const handleCancel = (e) => {
        e.preventDefault();
        const newHashTags = [...hashTags];
        newHashTags.splice(e.target.id, 1);
        setHashTags(newHashTags);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setHashTag(e.target.value);
    } 

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
            <div style={{ position: 'relative'}}>
                <div className={styles.inputDiv}>
                    {
                        hashTags.length > 0 && 
                        hashTags.map((hashTag, index) => {
                            return (
                                <span className={styles.hashTag}>
                                    <input value={hashTag} placeholder={hashTag} className={styles.hashTagInput} />
                                    <button className={styles.hashTagCancel} id={index} role='button' onClick={handleCancel} >x</button>
                                </span>
                            )
                        })
                    }
                    <input
                        className={styles.textInput}
                        type={type} 
                        placeholder={placeholder} 
                        id={id} 
                        name={name}
                        minLength={10}
                        maxLength={30}
                        onChange={handleChange}
                        value={hashTag}
                        onKeyDown={(e) => e.key != 'Enter'}
                    />
                </div>
                <div className={styles.btnWrapper}>
                    <div className={styles.btn} onClick={handleAddHashTag} >
                        <Image src={iconSrc} width={15} height={12} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HashTagInput;
