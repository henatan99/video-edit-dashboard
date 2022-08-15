import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css'

const HashTagInput = (props) => {
    const [hashTags, setHashTags] = useState(['hen', 'pc']);
    const { label, placeholder, icon, type, id, name } = props;
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
                                <span className={styles.hashTag}><span style={{ padding: '0.5rem'}}>{hashTag}</span>
                                    <span className={styles.hashTagCancel} id={index} role='button' onClick={handleCancel} style={{ padding: '0.5rem'}}>X</span>
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
                <div style={{ position: 'absolute', right: '1rem', bottom: 0}}>
                    <div style={{  position: 'relative', height: '4rem', display: 'flex'}} onClick={handleAddHashTag} >
                        <Image src='/assets/arrow-down-3101.svg' width={30} height={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HashTagInput;
