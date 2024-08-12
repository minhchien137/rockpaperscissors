// console.log(23+97);

// console.log(1+2+3+4+5+6);

// console.log((4 + 6 + 9) / 77);

// let a = 10;
// console.log(a);
// console.log(9*a);

// let b = 7 * a;
// console.log(b);

// const max = 57;
//  let actual = max - 13;
//  let percentage = actual / max;

// console.log(percentage);


// function fav(a){
//     return a +" is my fav"
// }


// console.log(fav('Goat'));


// function tong2so(a,b) {
//     return a + b;
// }

// console.log(tong2so(2,3));


// // let answer = parseInt(prompt("Nhap so vao di : "))

// // for(let i = 1; i <= answer; i++){
// //         console.log(i)
// // }

// // let so = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// // for(let i = 1; i <= so; i++){

// //     if(i % 3 === 0 && i % 5 === 0){
// //     console.log("FizzFive");
// //     } else if(i % 3 === 0){
// //         console.log("Fizz");
// //     } else if(i % 5 === 0){
// //         console.log("Five");
// //     } else{
// //         console.log(i);
// //     }
// // }



// // const str1 = "Hello";
// // const str2 = "World!";

// // const message = str1.concat(" "+str2);
// // console.log(message);


// const pi = 3.14;
// console.log(pi);



function getComputerChoice(){
    const randomNuber = Math.random();
    if (randomNuber < 0.33){
        console.log("Keo!");
    } else if( randomNuber < 0.67) {
        console.log("Bua!");
    } else{
        console.log("Bao!");
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    let sign = prompt(`Make your choice! Enter the number that match your choice.
        1. Rock
        2. Paper
        3. Scissors`);
    if(sign == 1){
        return "rock"
    }else if(sign == 2){
        return "paper"
    }else if(sign == 3){
        return "scissors"
    }
}

console.log(getHumanChoice());

