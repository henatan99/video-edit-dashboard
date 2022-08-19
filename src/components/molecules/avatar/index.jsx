import Image from "next/image";
import styles from './styles.module.css';

const Avatar = (props) => {
    const { photo, name, username, icon, variant } = props;
    
    return (
        <div className={styles.container}>
            <div className={styles.photoWrapper}>
                <Image src={photo.src} width={photo.width} height={photo.height} />
            </div>
            {
                variant === 'expandable' ?
                
                <div>
                    <button className={styles.btn}>
                        <Image src={icon.src} width={icon.width} height={icon.height}/>
                    </button>
                </div> 
                :
                <div className={styles.userInfo}>
                    <span style={{ fontSize: '0.9rem', padding: '3px'}}>
                        By {name}
                    </span>
                    <span style={{ fontSize: '0.8rem', padding: '3px', opacity: 0.6}}>
                        {username}
                    </span>
                </div>  
            }        
        </div>
    )
}

export default Avatar;