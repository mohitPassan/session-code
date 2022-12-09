import "./App.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ListHeader from "./components/ListHeader/ListHeader.component";
import ListItem from "./components/ListItem/ListItem.component";

function App() {
    return (
        <div className="App">
            <div className="icon-container">
                <FeatherIcon className="icon" icon="arrow-left" size={32} />
                <FeatherIcon className="icon" icon="more-vertical" size={32} />
            </div>
            <ListHeader iconName="user" numberOfTasks="7 tasks" listName="Personal" />
            <div className="items-container">
              <ListItem task="Walk dog" />
              <ListItem task="Walk cat" />
              <ListItem task="Walk octopus" />
              <ListItem task="Walk caterpillar" />
            </div>
            <div className="blob"></div>
        </div>
    );
}

export default App;
