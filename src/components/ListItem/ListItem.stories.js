import ListItem from "./ListItem.component";
import { useArgs } from "@storybook/client-api";

export default {
    title: "List item",
    component: ListItem,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/Z2Nd3CIxAcVzo7IwsG1n3a/Presentation?node-id=232%3A465&t=G6wjOeeXbWVBaqhb-1'
        }
    }
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
