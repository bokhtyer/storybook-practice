import "./InputField.css";

const InputProps = {
    type: String,
    name: String,
    label: String,
    placeholder: String,
    onChange: Function,
    value: String || Number || Array || Object,
};

export default function InputField(props = InputProps) {
    const { type = "text", name = "", label = "", placeholder = "", onChange = () => {}, value = "" } = props;

    return (
        <div className="single-input">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} />
            {value && <p>Value: {value}</p>}
        </div>
    );
}
