const prompt = require('prompt-sync')();

let option = Number(prompt("Enter [1] to construct a colour. Enter [2] to deconstruct a colour:  " ));

if (option === 1){
    const primarycolorchoice1 = prompt("Choose your first primary color [red], [blue], or [yellow]: ");
    const primarycolorchoice2 = prompt("Choose your second primary color [red], [blue], or [yellow]: ");
    
    if (primarycolorchoice1 === "red" && primarycolorchoice2 === "red"){
        console.log("You constructed the color: Red") 
    } else if (primarycolorchoice1 === "blue" && primarycolorchoice2 === "blue"){
        console.log("You constructed the color: Blue") 
    } else if (primarycolorchoice1 === "yellow" && primarycolorchoice2 === "yellow"){
        console.log("You constructed the color: yellow")
    } else if ((primarycolorchoice1 === "red" && primarycolorchoice2 === "blue")||(primarycolorchoice1 === "blue" && primarycolorchoice2 === "red")){
        console.log("You constructed the color: Purple") 
    } else if ((primarycolorchoice1 === "red" && primarycolorchoice2 === "yellow")||(primarycolorchoice1 === "yellow" && primarycolorchoice2 === "red")){
        console.log("You constructed the color: Orange") 
    } else if ((primarycolorchoice1 === "yellow" && primarycolorchoice2 === "blue")||(primarycolorchoice1 === "blue" && primarycolorchoice2 === "yellow")){
        console.log("You constructed the color: Green") 
    } else console.log("error")
}

if (option === 2){
    const secondarycolorchoice = prompt("Choose the colour you want to deconstruct [purple], [orange], [green]: ")

    if (secondarycolorchoice === "purple") {
        console.log("Your primary colors are red and blue")
    } else if (secondarycolorchoice === "orange") {
        console.log("Your primary colours are red and yellow")
    } else if (secondarycolorchoice === "green") {
        console.log("Your primary colors are blue and yellow")
    } else console.log("error")
}