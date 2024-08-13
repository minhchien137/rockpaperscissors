/*
console.log(23+97);

console.log(1+2+3+4+5+6);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9*a);

let b = 7 * a;
console.log(b);

const max = 57;
 let actual = max - 13;
 let percentage = actual / max;

console.log(percentage);


function fav(a){
    return a +" is my fav"
}


console.log(fav('Goat'));


function tong2so(a,b) {
    return a + b;
}

console.log(tong2so(2,3));


// let answer = parseInt(prompt("Nhap so vao di : "))

// for(let i = 1; i <= answer; i++){
//         console.log(i)
// }

// let so = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for(let i = 1; i <= so; i++){

//     if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzFive");
//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     } else if(i % 5 === 0){
//         console.log("Five");
//     } else{
//         console.log(i);
//     }
// }



// const str1 = "Hello";
// const str2 = "World!";

// const message = str1.concat(" "+str2);
// console.log(message);


const pi = 3.14;
console.log(pi);
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const randomNuber = Math.random();
  if (randomNuber < 0.33){
      return "keo";
  } else if( randomNuber < 0.67) {
      return "bua";
  } else{
      return "bao";
  }
}


function getHumanChoice() {
  let x = window.prompt("Bạn hãy chọn : Kéo - Búa - Bao")
  x.toLocaleLowerCase()
  switch (x) {
      case "keo":
          return "keo"
      case "bua":
          return "bua"
      case "bao":
          return "bao"
      default:
          x = window.prompt("Nhap lai di")
  }
}


function playRound(getHumanChoice, getComputerChoice){
  
  if(getHumanChoice == "keo" && getComputerChoice == "keo"){
    console.log("Người và máy hòa!");
  }else if(getHumanChoice == "keo" && getComputerChoice == "bua"){
    console.log("Người thắng!");
    computerScore+=1;
  }else if(getHumanChoice == "keo" && getComputerChoice == "bao"){
    console.log("Máy thắng!");
    humanScore+=1;
  }else if(getHumanChoice == "bua" && getComputerChoice == "bua"){
    console.log("Người và máy hòa!");
  }else if(getHumanChoice == "bua" && getComputerChoice == "bao"){
    console.log("Người thắng!");
    computerScore+=1;
  }else if(getHumanChoice == "bua" && getComputerChoice == "keo"){
    console.log("Máy thắng!");
    humanScore+=1;
  }else if(getHumanChoice == "bao" && getComputerChoice == "bao"){
    console.log("Người và máy hòa!");
  }else if(getHumanChoice == "bao" && getComputerChoice == "keo"){
    console.log("Người thắng!");
    computerScore+=1;
  }else if(getHumanChoice == "bao" && getComputerChoice == "bua"){
    console.log("Máy thắng!");
    humanScore+=1;
  }
}


function playGame(){
  for(let i = 0; i < 5; i++){
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log("Người chọn : " + human)
    console.log("Máy chọn : " + computer)
    playRound(computer, human)
  }
}

playGame()

console.log("Người được : " + humanScore + " điểm");
console.log("Máy được :  " + computerScore + " điểm");


if(humanScore > computerScore)(
  alert("Người vô địch!")
)
if(humanScore == computerScore)(
  alert("Trận đấu hòa!")
)
if(humanScore < computerScore)(
  alert("Máy vô địch!")
)








