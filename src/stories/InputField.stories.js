import { useEffect, useState } from "react";
import InputField from "../components/InputField/InputField";

export default {
    title: "Components/InputField",
    component: InputField,
    argTypes: {
        type: {
            control: "text",
            type: { required: true },
        },
        name: { control: "text" },
        label: {
            control: "text",
            type: { required: true },
        },
        placeholder: { control: "text" },
        value: { control: "text" },
        onChange: { action: "changed", control: false },
    },
};

const Template = (args) => {
    const [value, setValue] = useState(args.value || "");
    useEffect(() => {
        setValue(args.value || "");
    }, [args.value]);
    return (
        <InputField
            {...args}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                args.onChange(e); // Storybook action log
            }}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    type: "text",
    name: "username",
    label: "Username",
    placeholder: "Enter your username",
    value: "",
};
