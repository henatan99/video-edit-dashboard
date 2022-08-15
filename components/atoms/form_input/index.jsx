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
                /> 
                    : 
                type === 'hashtag' ?
                <HashTagInput
                    label={props.label} 
                    placeholder={props.placeholder}
                    icon={props.icon}
                    id={props.id}
                    name={props.name}
                />
                    :
                <TextInput
                    label={props.label} 
                    placeholder={props.placeholder}
                    icon={props.icon}
                    id={props.id}
                    name={props.name}
                />
            }
        </>
    )
}

export default Input;