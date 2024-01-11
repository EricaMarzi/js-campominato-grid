let grid = document.getElementById("grid")
const form = document.querySelector("form")



const rows = 10 //da cambiare in seguito per la select
const cols = 10 //da cambiare in seguito per la select
const totalCells = rows * cols;

const createNewCell = (num) => {
    const newCell = document.createElement("div")
    newCell.classList.add("cell")
    newCell.innerText = num
    return newCell
}


form.addEventListener ("submit", function(event) {
    event.preventDefault()
    grid.innerHTML = ""
 
    for(let i = 1; i <= totalCells; i++ ) {
        const cell = createNewCell(i)
        
        cell.addEventListener ("click", () => {
            cell.classList.toggle("bg-cell")
        })
            
            
        grid.appendChild(cell)
    }
})

