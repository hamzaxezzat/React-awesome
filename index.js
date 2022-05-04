function Navbar() {
    return (
        <nav>
            <img src="./react-logo.png" />
            <h3>React Course - Project 1</h3>
        </nav>
    );
}
function Body() {
    return (
        <div className="information">
            <h1>Fun facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps{" "}
                </li>
            </ol>
        </div>
    );
}
function Footer() {
    return <footer>€‹››ﬁﬂ‡°·‚⁄€‹ Hello</footer>;
}
function MainContent() {
    return (
        <div>
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

ReactDOM.render(<MainContent />, document.getElementById("root"));
