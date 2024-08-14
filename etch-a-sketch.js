// create a function that takes a parameter and creates a 
// parameter squared number of square divs inside the container

// this function below will create divs side by side
// horizontally
function createColumn(num) {
    for (let i = 1; i <= num; i++) {
        const sqDiv = document.createElement("div");
        const width = 100 / Number(num) // this is correct width percentage
        sqDiv.style.border = "3px solid black";
        sqDiv.style.height = "";
        
        console.log(`${width}`);
        sqDiv.style.width = `${width}%`; // this creats even columns
        container.appendChild(sqDiv);
    }
}

createColumn(7)