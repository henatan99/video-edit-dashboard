import Button from "../../atoms/button";
import Avatar from "../../molecules/avatar";
import IFrame from "../../molecules/i_frame";
import { iFrameInfo } from "./staticData";
import styles from './styles.module.css';
import VideoPlayer from "../../atoms/VideoPlayer";

const EditView = () => {
    const { date, time, likes, comments, views, image, button, avatar } = iFrameInfo;

    return (
        <div className={styles.editViewInner}>
            <div className={styles.editFrameInner}>
                <div className={styles.avatar}>
                    <Avatar
                        photo={avatar.photo}
                        name={avatar.name}
                        username={avatar.username}
                    />
                </div>
                <IFrame
                    date={date}
                    time={time}
                    likes={likes}
                    comments={comments}
                    views={views}
                    image={image}
                />
            </div>
            <div className={styles.btnWrapper}>
                <Button 
                    text={button.text}
                    variant={button.variant}
                />
            </div>
        </div>
    )
}

export default EditView;