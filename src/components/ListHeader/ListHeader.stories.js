import ListHeader from "./ListHeader.component";

export default {
    title: "List header",
    component: ListHeader
}

const Template = (args) => <ListHeader {...args} />

export const Default = Template.bind({});
Default.args = {
    iconName: "user",
    numberOfTasks: "8 tasks",
    listName: "Personal"
}