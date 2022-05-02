function TitleContent() {
    return <h1>My name is Title</h1>;
}

function MainContent() {
    return (
        <nav>
            <TitleContent />
            <ul>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

ReactDOM.render(MainContent(), document.getElementById("root"));

// How to replace ReactDOM.render in Vanilla JS>>>>
const root = document.getElementById("root");
const title = document.createElement("h1");
title.textContent = "Hello Vanilla JS";
title.classList.add("header");
root.appendChild(title);

// ! Nots
// * How to call the function into JSX?
// Solve: <FunctionName />

// ? ========== Start of - Declarative vs Imparative ==========
// Declarative : Just tell me what you need to do?
// The Computer will do it instead of you
// Imparative: You do what you need in Computer without Instractions
// * Exmaple
// Dec: ReactDOM.render(MainContent(), document.getElementById("root"));
// Imp:
// const root = document.getElementById("root");
// const title = document.createElement("h1");
// title.textContent = "Hello Vanilla JS";
// title.classList.add("header");
// root.appendChild(title);
// ? ========== End of - Declarative vs Imparative ==========

//   Hello
// * Hello
// ! Hello
// ? Hello
// TODO Hello
