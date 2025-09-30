import Card from "./Card";

export default {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        // title: { control: "text" },
        // content: { control: "text" },
        alignment: {
            type: "select",
            options: ["left", "center", "right"],
        },
    },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "My Card Title",
    content: "This is some example content for the card.",
    alignment: "left",
};
