
// Create grid
function grid() {

    let divMain = document.createElement('div');
    divMain.id = 'main';
    document.body.append(divMain);
    let gridSize = prompt("Enter grid size 1-100:");

        if (gridSize > 100) {
            alert('Please enter a grid size of 1 - 100.');
            gridSize = prompt("Enter grid size 1-100:");
        }

        for (let i = 0; i < gridSize; i++) {

            let div = document.createElement('div')
            div.id = "container" + i;
            document.getElementById('main').appendChild(div);
            document.getElementById('container' + i).className = "cols"
            

        for (let j = 0; j < gridSize; j++) {

            let gridBlock = document.createElement('div');
            gridBlock.className = "color" 
            gridBlock.id = "block";
            document.getElementById("container" + i).appendChild(gridBlock);
            
            
    
    
        }
    };

    

// Color when mouse enters

        let blocks = document.getElementsByClassName('color');

            for (let k = 0; k < blocks.length; k++ ) {
            blocks[k].addEventListener('mouseenter', function() {
            blocks[k].style.backgroundColor = "#eb4933";
        
        });
    }
}

// reset grid to default color

function resetGrid() {

        const resetBtn = document.getElementById('reset');

        resetBtn.addEventListener('click', function() {
        let blocks = document.getElementsByClassName('color');
        
        for (let k = 0; k < blocks.length; k++ ) {
       
        blocks[k].style.backgroundColor = "";
        
        
        };
    });
}

// Resize grid

function resizeGrid() {
    
let resizeBtn = document.getElementById('size');

        resizeBtn.addEventListener('click', function() {

            let column = document.getElementsByClassName('cols');
            document.getElementById('main').remove(column);
            grid();

    }); 
}




resizeGrid();
resetGrid();
