import Image from "next/image";
import Info from "../info";
import styles from './styles.module.css';

const IFrame = (props) => {
    const { date, time, likes, comments, views, image } = props;

    return (
        <div>
            <span className={styles.topInfo}>
                <Info text={date.text} icon={date.icon} variant = 'wide' />
                <Info text={time.text} icon={time.icon} variant = 'wide' />
            </span>
            <div className={styles.media}>
                <Image src={image.src} width={image.width} height={image.height}/>
            </div>
            <span className={styles.bottomInfo}>
                <Info text={likes.text} icon={likes.icon} />
                <Info text={comments.text} icon={comments.icon}/>
                <Info text={views.text} icon={views.icon}/>
            </span>
        </div>
    )
}
 
export default IFrame;