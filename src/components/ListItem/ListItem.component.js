import { useState } from "react";
import "./ListItem.styles.scss";

const ListItem = ({ task }) => {
    const [done, setDone] = useState(false);

    const handleClick = () => {
        setDone(!done);
    }

    return (
        <div className="list-item" onClick={handleClick}>
            {done ? (
                <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1"
                        y="1"
                        width="24"
                        height="24"
                        rx="2"
                        fill="#A4A4A4"
                        stroke="#A4A4A4"
                        strokeWidth="2"
                    />
                    <path
                        d="M21 7L10 18L5 13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ) : (
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1"
                        y="1"
                        width="24"
                        height="24"
                        rx="2"
                        stroke="#747474"
                        strokeWidth="2"
                    />
                </svg>
            )}
            <span
                style={{
                    color: done ? "#A4A4A4" : "#646464",
                    textDecoration: done ? "line-through" : "",
                }}
            >
                {task}
            </span>
        </div>
    );
};

export default ListItem;
