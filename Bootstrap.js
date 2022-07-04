import {createBoard} from './Controllers/BoardCreators/BoardCreator.js'

let createBoardBtn = document.getElementById("board_creator");
createBoardBtn.addEventListener("click",()=>createBoard());