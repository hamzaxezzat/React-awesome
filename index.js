import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
function App() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
