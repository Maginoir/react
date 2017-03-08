"use strict";

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "title" },
        "Hello React"
    ),
    React.createElement(
        "p",
        null,
        "Welcome to React"
    )
), // элемент, который мы хотим создать
document.getElementById("container") // где мы этот элемент хотим создать
);
