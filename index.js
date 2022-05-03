const mainContent = (
    <div>
        <header>
            <img src="./react-logo.png" />
            <h3>React Course - Project 1</h3>
        </header>
        <div className="information">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps{" "}
                </li>
            </ul>
        </div>
    </div>
);

ReactDOM.render(mainContent, document.getElementById("root"));

// document.getElementById("root").append(JSON.stringify(mainContent));
