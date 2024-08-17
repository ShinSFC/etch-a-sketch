const startBtn = document.createElement("button");
startBtn.textContent = "Start";

const container = document.querySelector("#container");
document.body.insertBefore(startBtn, container);

startBtn.addEventListener("click", () => {
    let num = prompt("Enter the number of squares per side: (must be less than 100)");

    container.innerHTML = '';
    createGrid(num);
});

function createGrid(num) {
    // this creates the columns
    for (let i = 1; i <= num; i++) {
        const column = document.createElement("div");
        const width = 100 / Number(num) // this is correct width percentage   
        
        column.style.width = `${width}%`; // this creates even columns
        container.appendChild(column);

        // this creates the squares inside the columns
        for (let i = 1; i <= num; i++) {
            const square = document.createElement("div");
            square.style.border = "1px solid black"; 
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




