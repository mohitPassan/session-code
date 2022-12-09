import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import "./ListHeader.styles.scss";

const ListHeader = ({ iconName, numberOfTasks, listName }) => {
    return (
        <div className="list-header">
            <FeatherIcon className="header-icon" icon={iconName} size={52} />
            <div>
                <p className="number-tasks">{numberOfTasks}</p>
                <p className="list-name">{listName}</p>
            </div>
        </div>
    );
};

export default ListHeader;
