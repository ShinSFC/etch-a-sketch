// create a function that takes a parameter and creates a 
// parameter squared number of square divs inside the container

// this function below will create divs side by side
// horizontally
function createColumn(num) {
    for (let i = 1; i <= num; i++) {
        const column = document.createElement("div");
        const width = 100 / Number(num) // this is correct width percentage

        column.style.border = "3px solid black";
        column.style.height = "";
        
        column.style.width = `${width}%`; // this creats even columns
        container.appendChild(column);
    }
}

createColumn(5)