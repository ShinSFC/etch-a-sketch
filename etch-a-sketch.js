// this function below will create divs side by side
// horizontal columns
// const square = ''
createGrid(50)
function createGrid(num) {
    for (let i = 1; i <= num; i++) {
        const column = document.createElement("div");
        const width = 100 / Number(num) // this is correct width percentage   
        
        column.style.width = `${width}%`; // this creats even columns
        column.style.maxHeight = '100%'; // max height does work but won't prevent squares from going outside border
        // column.style.boxSizing = "border-box"; // not sure if this is needed
        container.appendChild(column);

        // this creates the squares
        for (let i = 1; i <= num; i++) {
            const square = document.createElement("div");
            // const sqHeight = width
            square.style.border = "1px solid black"; // this causes the height to exceed the parent div
            square.style.boxSizing = "border-box"; // this prevents the height to exceedt the parent div
            square.style.height = `${width}%`;
            square.style.backgroundColor = 'yellow';
            column.appendChild(square);
            
            // hover to change color
            square.addEventListener("mouseenter", () => { 
                square.style.backgroundColor = "red";
            }); // mouseenter and mousemove works to hover but not click
        }
    }
}

// createGrid(100)

// commit:
// change function name to createGrid

