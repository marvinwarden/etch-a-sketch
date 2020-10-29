
function sketch() {

function grid(gridSize) {

    gridSize = prompt("Enter the grid size:");

    let divMain = document.createElement('div');
    divMain.id = 'main';
    document.body.appendChild(divMain);

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



let blocks = document.getElementsByClassName('color');



for (let k = 0; k < blocks.length; k++ ) {
    blocks[k].addEventListener('mouseenter', function() {
        blocks[k].style.backgroundColor = "red";
        
        
    });





}

}



grid();



}




function resetGrid() {

        const resetBtn = document.getElementById('reset');

        resetBtn.addEventListener('click', function() {
        let blocks = document.getElementsByClassName('color');

        for (let k = 0; k < blocks.length; k++ ) {
       
        blocks[k].style.backgroundColor = "";
        
        };

        
    });
}

// function resizeGrid() {
//     const resize = document.getElementById('size');
//     const remElem = document.getElementById('block');
//     resize.addEventListener('click', function(){
        
//         remElem.parentNode.removeChild(remElem);
        
//     });
        
    
// }
// resizeGrid();

resetGrid();
sketch();
