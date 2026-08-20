# Pixel Art Maker

A simple and interactive **Pixel Art Maker** built using vanilla HTML, CSS, and JavaScript. It allows users to create pixel-based artwork directly in the browser using different colors and customizable grid sizes.

## Live Demo
https://jasmeett09.github.io/pixel-art-maker/

## Preview

<img width="1897" height="907" alt="image" src="https://github.com/user-attachments/assets/23098f38-0502-4618-9a81-cfdfb0d6a14d" />


## Features

* Draw pixel art by clicking and dragging across the canvas
* Choose any color using the color picker
* Select colors quickly from a predefined color palette
* Erase individual pixels using the eraser tool
* Clear the entire canvas
* Switch between different canvas sizes:

  * 8 × 8
  * 16 × 16
  * 24 × 24
  * 32 × 32
* Responsive interface for different screen sizes
* Custom-designed pixel-art inspired background and interface
* Built entirely with vanilla JavaScript without external libraries

## Tech Stack

* **HTML5** — Application structure
* **CSS3** — Styling, responsive layout, animations, and background design
* **JavaScript** — Grid generation, drawing functionality, color selection, and user interactions

## Project Structure

```text
pixel-art-maker/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
    └── preview.png
```

## How It Works

The drawing canvas is created dynamically using JavaScript.

When a grid size is selected, JavaScript generates the required number of pixel elements. For example, a `24 × 24` canvas contains:

```text
24 × 24 = 576 pixels
```

CSS Grid is used to arrange these pixels into rows and columns.

Drawing is handled using mouse events:

* `mousedown` starts drawing.
* `mouseover` colors pixels while the mouse is being dragged.
* `mouseup` stops drawing.

The selected color is applied by changing the background color of individual pixel elements.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/pixel-art-maker.git
```

### 2. Open the project

```bash
cd pixel-art-maker
```

### 3. Run the application

No installation or dependencies are required.

Simply open:

```text
index.html
```

in your browser.

You can also use the **Live Server** extension in VS Code.

## Usage

1. Select a color using the color picker or Quick Colors panel.
2. Click or drag across the canvas to draw.
3. Select **Eraser** to remove individual pixels.
4. Select **Clear** to reset the entire canvas.
5. Use the grid-size selector to create a canvas with a different resolution.

> Changing the grid size creates a new canvas and clears the current artwork.

## What I Learned

While building this project, I practiced:

* DOM manipulation with JavaScript
* Dynamically creating HTML elements
* Working with mouse events
* CSS Grid
* Managing application state with JavaScript
* Handling user input
* Responsive web design
* Building interactive UI components without external frameworks

## Future Improvements

Some features that can be added in future versions:

* Undo and redo
* Download artwork as PNG
* Save artwork using Local Storage
* Fill bucket tool
* Eyedropper/color picker tool
* Toggle grid lines
* Custom grid dimensions
* Touch support for mobile devices


