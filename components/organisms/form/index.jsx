import Input from "../../atoms/form_input";
import LabeledDivider from "../../atoms/divider";
import { formFields, levelFormFields, buttons } from "./staticData";
import styles from './styles.module.css';
import Button from "../../atoms/button";
import { useState } from "react";

const Form = () => {
    const initialState = {} 
    formFields.forEach( field => initialState[field.name] = field.initialValue);
    levelFormFields.forEach( field => initialState[field.name] = field.initialValue);

    const [state, setState] = useState(initialState);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(state))
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.name === 'cancel') {
            setState(initialState);
        } else {
            return handleFormSubmit(e);
        }
    }
    
    return (
        <div style={{ height: 'inherit'}}>
            <form className={styles.formElem} onSubmit={handleFormSubmit}>
                <div className={styles.formDivWrapper}>
                    <div className={styles.formDiv}>
                        {
                            formFields.map(field => 
                                {
                                    return (
                                        <div className={styles.inputWrapper}>
                                            <Input {...field} propState={state} setPropState={setState} />
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
                                            <Input {...field} propState={state} setPropState={setState} />
                                        </div> 
                                    )
                                })
                        }
                    </div>
                </div>
                
                <div className={styles.btnsWrapper}>
                    {
                        buttons.map(button => {
                            return (
                                <div className={styles.btn}>
                                    <Button
                                        text={button.text}
                                        variant={button.variant}
                                        type={button.type}
                                        onClick={handleClick}
                                        name={button.name}
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