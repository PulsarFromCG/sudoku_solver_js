function buildSudokuTable(){

    let sudoTable = document.getElementById("sudoku_table");

    for(i = 0; i <= 80; i++){

        let htmlText = '';

        htmlText += '<div id="'+i+'" class="cell">';
        htmlText += '<textarea maxlength="1" class="cell_text_area"></textarea>';
        htmlText += '</div>';
        
        sudoTable.innerHTML += htmlText;
    }

    let cellDiv = document.getElementsByClassName("cell");
    let boldRight = [2,11,20,29,38,47,56,65,74,5,14,23,32,41,50,59,68,77];
    let boldBottom = [18,19,20,21,22,23,24,25,26,45,46,47,48,49,50,51,52,53];

    for (let i = 0; i <= boldRight.length - 1; i++){
        cellDiv[boldRight[i]].style.borderRight = "3px solid black";
    }

    for (let i = 0; i <= boldBottom.length - 1; i++){
        cellDiv[boldBottom[i]].style.borderBottom = "3px solid black";
    }
}

function cellAreaConfig(){
    
    let cell = document.getElementsByClassName("cell_text_area");
    
    const allowedKeys = [
        "Backspace", 
        "Delete",
    ];

    for(let i = 0; i <= cell.length - 1; i++){

        cell[i].addEventListener("keydown", function(e){

            if(e.key.match(/[a-zA-Z0]/) && !allowedKeys.includes(e.key)){
                e.preventDefault();
            }

            if(isNumberExist(i, cell, e)){
                alert("DOUBLON !!!");
                e.preventDefault();
            }
        });
    }
}

function isNumberExist(i, cell, e){

    // TEST X - AXIS

    if(i >= 0 && i <= 8){
        for(let u = 0; u <= 8; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        }
    }else if(i >= 9 & i <= 17){
        for(let u = 9; u <= 17; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        }
    }else if(i >= 18 & i <= 26){
        for(let u = 18; u <= 26; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        }
    }else if(i >= 27 & i <= 35){
        for(let u = 27; u <= 35; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        }
    }else if(i >= 36 & i <= 44){
        for(let u = 36; u <= 44; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        }
    }else if(i >= 45 & i <= 53){
        for(let u = 45; u <= 53; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        }
    }else if(i >= 54 & i <= 62){
        for(let u = 54; u <= 62; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        } 
    }else if(i >= 63 & i <= 71){
        for(let u = 63; u <= 71; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        }
    }else if(i >= 72 & i <= 80){
        for(let u = 72; u <= 80; u++){
            if(e.key == cell[u].value & i != u){
                return true;
            }
        }
    }

    // TEST Y - AXIS

    let reduction = i;

    while(reduction >= 9){
        reduction -= 9;
    }

    switch(reduction){
        case 0:
            for(let u = 0; u <= 72; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        case 1:
            for(let u = 1; u <= 73; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        case 2:
            for(let u = 2; u <= 74; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        case 3:
            for(let u = 3; u <= 75; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        case 4:
            for(let u = 4; u <= 76; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        case 5:
            for(let u = 5; u <= 77; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        case 6:
            for(let u = 6; u <= 78; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        case 7:
            for(let u = 7; u <= 79; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        case 8:
            for(let u = 8; u <= 80; u += 9){

                if(e.key == cell[u].value & i != u){
                    return true;
                }
            }
            break;
        default:
            alert("ERROR");
    }

    // TEST SECTION

    let sectionA0 = [0,1,2,9,10,11,18,19,20];
    let sectionA1 = [3,4,5,12,13,14,21,22,23];
    let sectionA2 = [6,7,8,15,16,17,24,25,26];
    let sectionB0 = [27,28,29,36,37,38,45,46,47];
    let sectionB1 = [30,31,32,39,40,41,48,49,50];
    let sectionB2 = [33,34,35,42,43,44,51,52,53];
    let sectionC0 = [54,55,56,63,64,65,72,73,74];
    let sectionC1 = [57,58,59,66,67,68,75,76,77];
    let sectionC2 = [60,61,62,69,70,71,78,79,80];

    if(sectionA0.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionA0[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }else if(sectionA1.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionA1[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }else if(sectionA2.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionA2[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }else if(sectionB0.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionB0[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }else if(sectionB1.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionB1[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }else if(sectionB2.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionB2[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }else if(sectionC0.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionC0[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }else if(sectionC1.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionC1[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }else if(sectionC2.includes(i)){
        for(let u = 0; u <= 8; u++){

            z = sectionC2[u];

            if(e.key == cell[z].value & i != z){
                return true;
            }
        }
    }

    return false;
}

function solvingSudoku(){
    let runButton = document.getElementById("run_button");

    runButton.addEventListener("click", function(){
        let cell = document.getElementsByClassName("cell_text_area");

        for(let i = 0; i <= cell.length - 1; i++){
            if(cell[i].value == ''){
                for(let u = 1; u <= 9; u++){
                    if (!isNumberExist(i, cell, u)){
                        cell[i].value = u;
                    }
                }
            }
        }
    });
}