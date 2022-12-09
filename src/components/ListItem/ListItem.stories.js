import ListItem from "./ListItem.component";
import { useArgs } from "@storybook/client-api";

export default {
    title: "List item",
    component: ListItem,
};

const Template = (args) => {
    const [{ done }, updateArgs] = useArgs();
    const handleClick = () => {
        updateArgs({
            done: !done,
        });
    };
    return <ListItem onClick={handleClick} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    task: "This is a task",
    done: true,
};
