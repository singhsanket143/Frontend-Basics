document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");
    let chance = false; // when chance is false we put O , when chance is true we put X
    let arr = Array(9).fill(undefined);
    outer.addEventListener("click", (e) => {
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        if(cell.getAttribute("data-clicked")) {
            return;
        }
        cell.setAttribute("data-clicked", "true");
        if(chance == true) {
            cell.textContent = "X";
            arr[cellNumber] = "X";
            winningCombo("X");
        } else {
            cell.textContent = "O"
            arr[cellNumber] = "O";
            winningCombo("O");
        }
        console.log(arr);
        chance = !chance; // toggles chance
    })

    function winningCombo(char) {
        let result = document.getElementById("result");
        if(arr[0] == char && arr[1] == char && arr[2] == char) {
            // the f0th row is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[3] == char && arr[4] == char && arr[5] == char) {
            // the 1st row is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[6] == char && arr[7] == char && arr[8] == char) {
            // the 2nd row is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[0] == char && arr[3] == char && arr[6] == char) {
            // the 0th col is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[1] == char && arr[4] == char && arr[7] == char) {
            // the 1st col is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[2] == char && arr[5] == char && arr[0] == char) {
            // the 2nd col is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[0] == char && arr[4] == char && arr[8] == char) {
            // the 1st col is having the char;
            result.textContent = `${char} wins`;
        }
        else if(arr[2] == char && arr[4] == char && arr[6] == char) {
            // the 2nd col is having the char;
            result.textContent = `${char} wins`;
        }
    }
})