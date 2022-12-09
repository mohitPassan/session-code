import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import "./ListHeader.styles.scss";
import propTypes from 'prop-types';

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

ListHeader.propTypes = {
    /** Icon name can be found in feather icons library */
    iconName: propTypes.oneOf(['user', 'arrow-left', 'x']),
    numberOfTasks: propTypes.string,
    listName: propTypes.string
}

export default ListHeader;
