const grid = document.getElementById("grid");

const colorPicker =
    document.getElementById("colorPicker");

const gridSize =
    document.getElementById("gridSize");

const eraserButton =
    document.getElementById("eraser");

const clearButton =
    document.getElementById("clear");

const quickColors =
    document.querySelectorAll(".color-box");


let currentColor = colorPicker.value;

let isDrawing = false;

let eraserMode = false;


/* ==========================================
   CREATE GRID
========================================== */

function createGrid(size) {

    grid.innerHTML = "";

    grid.style.gridTemplateColumns =
        `repeat(${size}, 1fr)`;

    grid.style.gridTemplateRows =
        `repeat(${size}, 1fr)`;


    for (let i = 0; i < size * size; i++) {

        const pixel =
            document.createElement("div");

        pixel.classList.add("pixel");


        /* Start drawing */

        pixel.addEventListener(
            "mousedown",
            () => {

                isDrawing = true;

                draw(pixel);

            }
        );


        /* Draw while dragging */

        pixel.addEventListener(
            "mouseover",
            () => {

                if (isDrawing) {

                    draw(pixel);

                }

            }
        );


        grid.appendChild(pixel);
    }
}


/* ==========================================
   DRAW
========================================== */

function draw(pixel) {

    if (eraserMode) {

        pixel.style.backgroundColor =
            "white";

    }

    else {

        pixel.style.backgroundColor =
            currentColor;

    }

}


/* ==========================================
   STOP DRAWING
========================================== */

document.addEventListener(
    "mouseup",
    () => {

        isDrawing = false;

    }
);


/* Prevent dragging */

grid.addEventListener(
    "dragstart",
    (event) => {

        event.preventDefault();

    }
);


/* ==========================================
   COLOR PICKER
========================================== */

colorPicker.addEventListener(
    "input",
    () => {

        currentColor =
            colorPicker.value;

        disableEraser();

    }
);


/* ==========================================
   QUICK COLORS
========================================== */

quickColors.forEach((button) => {

    const color =
        button.dataset.color;


    /* Give button its color */

    button.style.backgroundColor =
        color;


    /* Select quick color */

    button.addEventListener(
        "click",
        () => {

            currentColor = color;

            colorPicker.value = color;

            disableEraser();

        }
    );

});


/* ==========================================
   ERASER
========================================== */

eraserButton.addEventListener("click", () => {

    eraserMode = !eraserMode;

    if (eraserMode) {
        eraserButton.classList.add("active");
    } else {
        eraserButton.classList.remove("active");
    }

});


function disableEraser() {

    eraserMode = false;

    eraserButton.classList.remove("active");
}


/* ==========================================
   CLEAR
========================================== */

clearButton.addEventListener(
    "click",
    () => {

        const pixels =
            document.querySelectorAll(
                ".pixel"
            );


        pixels.forEach((pixel) => {

            pixel.style.backgroundColor =
                "white";

        });

    }
);


/* ==========================================
   CHANGE GRID SIZE
========================================== */

gridSize.addEventListener(
    "change",
    () => {

        const size =
            Number(gridSize.value);

        createGrid(size);

    }
);


/* ==========================================
   INITIAL GRID
========================================== */

createGrid(24);
