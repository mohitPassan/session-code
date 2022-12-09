import "./App.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ListHeader from "./components/ListHeader/ListHeader.component";

function App() {
    return (
        <div className="App">
            <div className="icon-container">
                <FeatherIcon className="icon" icon="arrow-left" size={32} />
                <FeatherIcon className="icon" icon="more-vertical" size={32} />
            </div>
            <ListHeader iconName="user" numberOfTasks="7 tasks" listName="Personal" />
            <div className="blob"></div>
        </div>
    );
}

export default App;
