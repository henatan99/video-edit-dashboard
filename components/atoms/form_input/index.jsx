import SelectInput from "./select_input";
import TextInput from "./text_input";
import HashTagInput from "./hashtag_input";

const Input = (props) => {
    const { type } = props;

    return (
        <>
            {
                type === 'select' ? 
                <SelectInput
                    options={props.options}
                    label={props.label} 
                    iconSrc={props.iconSrc}
                    name={props.name}
                    propState={props.propState}
                    setPropState={props.setPropState}    
                /> 
                    : 
                type === 'hashtag' ?
                <HashTagInput
                    label={props.label} 
                    placeholder={props.placeholder}
                    icon={props.icon}
                    id={props.id}
                    name={props.name}
                    iconSrc={props.iconSrc}
                    propState={props.propState}
                    setPropState={props.setPropState}
                />
                    :
                <TextInput
                    label={props.label} 
                    placeholder={props.placeholder}
                    icon={props.icon}
                    id={props.id}
                    name={props.name}
                    iconSrc={props.iconSrc}
                    background={props.background}
                    propState={props.propState}
                    setPropState={props.setPropState}
                />
            }
        </>
    )
}

export default Input;