function grid () {
    var squares = 16;
    const pad = Math.pow(squares, 2);
    for (i = 0; i < pad; i++ ) {
        let row = document.createElement("div");
        document.getElementById("main").appendChild(row).className = "gridRow";
        document.getElementById("main").style.gridTemplateRows = 'repeat(' + squares + ', 1fr)';
        document.getElementById("main").style.gridTemplateColumns = 'repeat(' + squares + ', 1fr)';
        const d = document.querySelectorAll("div.gridRow");
        var element = null;
        const a = 500 / squares
        for (let i = 0; i < d.length; i++) {
            element = d[i]
            element.style.height = a + 'px';
            element.style.width = a + 'px';
        }
    }
}

const etch = grid();

var colorWell;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateAll(event) {
    defaultColor = event.target.value;
}

function color () {
    main.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = defaultColor;
    })
}

function eraser () {
    main.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = "white";
    })
}

function cleared () {
    const list = document.querySelectorAll("div.gridRow");
    var element = null;
    for (let i = 0; i < list.length; i++) {
        element = list[i]
        element.style.backgroundColor = "white";
    }
}