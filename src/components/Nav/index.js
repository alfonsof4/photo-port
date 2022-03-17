import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

    const categories = [
        {
            name: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects"
        },
        { name: "portraits", description: "Portaits of people in my life" },
        { name: "food", description: "Delicious delicacies"},
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and beauty of nature",
        },
    ];

    const handleClick = () => {
        console.log("click handled")
    }

    return (
        <header>
            <h2>
                <a href="/">
                    <span role ="img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {
                     categories.map((category) => (
                         <li className="mx-1"key={category.name}>
                            <span onClick={() => { handleClick(); }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                     ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;