###Quiz 1

1. Why do we need to "import React from "react" in our files?
   Solve: To initiat react and use the framework and JSX itself

2. If I were to console. log (page) in index.js, what would show up?
   A javascript Object , [Object Object]

3. What's wrong with this code:

```
const page = (
<h1>Hello</h1›
<p>This is my website! </p>)
```

The code must be in the one tag

4. What does it mean for something to be "declarative" instead of "imperative"?
   you tell react what you need to do, and react do it instead of you and translate it to vanilla JS
   imerative : you do every single code in JS

5. What does it mean for something to be "composable"?
   a reusable Block of code could be use or remove

###Quiz 2

1. What is a React component?
   a function return react Elements
2. What's wrong with this code?

```
function myComponent(){
return (
‹small›I'm tiny text! </small>
)}
```

the name of function should be in BascalCase (First letter Capital)

3. What's wrong with this code?

```
function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px"/>
      </nav>
    </header>
  )
}
ReactDOM.render(Header(),document.getElementById("root"));
```

The way of call the react element or function

```
ReactDOM.render(<Header />,document.getElementById("root"));
```
