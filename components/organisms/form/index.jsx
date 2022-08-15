import Input from "../../atoms/form_input";
import { formFields } from "./staticData";
import styles from './styles.module.css';

const Form = () => {
    // const {formFields } = props;
    
    return (
        <form className={styles.formElem}>
            {
                formFields.map(field => 
                    {
                        return (
                            <div className={styles.inputWrapper}>
                                <Input {...field} />
                            </div> 
                        )
                    })
            }
        </form>
    )
}

export default Form;