startBtn = document.createElement("button");
startBtn.textContent = "Start";
container = document.querySelector("#container");
document.body.insertBefore(startBtn, container);

startBtn.addEventListener("click", () => {
    let num = prompt("Enter the number of squares per side: (must be less than 100)");
    square.remove();
    column.remove();
    createGrid(num);
});

//createGrid(50);

function createGrid(num) {
    // this creates the columns
    for (let i = 1; i <= num; i++) {
        const column = document.createElement("div");
        const width = 100 / Number(num) // this is correct width percentage   
        
        column.style.width = `${width}%`; // this creats even columns
        column.style.maxHeight = '100%'; // max height does work but won't prevent squares from going outside border
        // column.style.boxSizing = "border-box"; // not sure if this is needed
        container.appendChild(column);

        // this creates the squares inside the columns
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
        }       // dragover, 
    }
}

// createGrid(100)


