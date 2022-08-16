import Input from "../../atoms/form_input";
import LabeledDivider from "../../atoms/divider";
import { formFields, levelFormFields, buttons } from "./staticData";
import styles from './styles.module.css';
import Button from "../../atoms/button";

const Form = () => {
    
    return (
        <div style={{ height: 'inherit'}}>
            <form className={styles.formElem}>
                <div className={styles.formDiv}>
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
                </div>
                <LabeledDivider label='Levels'/>
                <div className={styles.formDiv}>
                    {
                        levelFormFields.map(field => 
                            {
                                return (
                                    <div className={styles.inputWrapper}>
                                        <Input {...field} />
                                    </div> 
                                )
                            })
                    }
                </div>
                
                <div className={styles.btnsWrapper}>
                    {
                        buttons.map(button => {
                            return (
                                <div className={styles.btn}>
                                    <Button
                                        text={button.text}
                                        variant={button.variant}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </form>
        </div>
    )
}

export default Form;