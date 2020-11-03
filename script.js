
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
function randomCol() {

    let blocks = document.getElementsByClassName('color');
    let randomColor = document.getElementById('random');

    // function randomC(){
    //     var color = "#";
    //     var randomHex = "123456ABCDEF";  
    //     for(var i = 0; i<6;i++){
    //         color+= randomHex[Math.floor(Math.random()*16)]
    //     }
       
    //     return color;
    // }


    

    randomColor.addEventListener('click', function() {
        for (let k = 0; k < blocks.length; k++ ) {

            let rainbowColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            
            blocks[k].addEventListener('mouseenter', function() {
            blocks[k].style.backgroundColor = rainbowColor;
            });
        }
    });


        
}
    
randomCol();

    

// Color when mouse enters
function colorBlock() {

                let blocks = document.getElementsByClassName('color');
                let defaultCol = document.getElementById('default')

                defaultCol.addEventListener('click', function() {
                for (let k = 0; k < blocks.length; k++ ) {
                blocks[k].addEventListener('mouseenter', function() {
                blocks[k].style.backgroundColor = "#eb4933";
                
    
                });

            }
        });
    
    }
colorBlock();  

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
