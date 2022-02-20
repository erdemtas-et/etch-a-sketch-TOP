//create grid 
const handleGrid = (color) => {
    const gridContainer = document.querySelector(".grid-container")
    for(let i=0;i<20;i++) {
        for(let j=0;j<20;j++) {
            const grid = document.createElement("div")
            grid.classList.add("grid")
            gridContainer.appendChild(grid)
        }
    }

    handleMouseOver(color)
    handleCleanBoard()
}

//handling mouseOver event
const handleMouseOver = (color) => {
    const grid = document.querySelectorAll(".grid")
    const gridArray = Array.from(grid)
    gridArray.forEach((square)=> {
        square.addEventListener("mouseover",(e)=> {
            
            e.target.style.backgroundColor = color
        })
    })
}
    //prevent the pre-existence of grid
    const handleCleanGrid = () => {
        const gridContainer = document.querySelector(".grid-container")
        gridContainer.innerHTML = ""
    }

    //handling color selection
    document.querySelector("#red").addEventListener("click",(e)=> {
        handleCleanGrid();
        let colorSelected = "red"
        handleGrid(colorSelected)
    })

    document.querySelector("#green").addEventListener("click",e=> {
        handleCleanGrid();
        let colorSelected="green"
        handleGrid(colorSelected)
        console.log("green");
    })

    document.querySelector("#blue").addEventListener("click",e=> {
        handleCleanGrid();
        let  colorSelected = "blue"
        handleGrid(colorSelected)
        console.log("blue")
    })

   
    


//handling cleaning the board
const handleCleanBoard = () => {
    document.querySelector("#restart-button").addEventListener("click",e => {
        const grid = document.querySelectorAll(".grid")
        const gridArray = Array.from(grid)
        gridArray.forEach((square)=> {
            square.style.backgroundColor = "white"
        })
    })
}

//default color
handleGrid("black")

