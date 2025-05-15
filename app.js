const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hello I'm a child"),
        React.createElement("h2",{},"Hello I'm a child too")]
));

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);