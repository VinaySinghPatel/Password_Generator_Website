const Generate = document.getElementById("Hey3");
const Reset = document.getElementById("Hey4");
const OutPutVal = document.getElementById("Hey1");
const MultipleValue = document.getElementById("Hey");
let rendomNumber = 1;
let RandommobileNumber = "a";
let PassLength = 9;

console.dir(Generate);
let Head1 = document.querySelector("h3");


Reset.addEventListener("click",()=>{
    OutPutVal.value = " ";
})

const UpperCase = "ABCDEFGHIJKLMNPQRSTUVWXYZ"
const LowerCase = "abcdefghijklmnopqrstuvwxyz"
const Numbers = "123456890"
const Symbols = "@#$&!";
const allpasschar = UpperCase + LowerCase + Numbers + Symbols;

function RandomPASS(){
    let Number = "";
    Number = Number+UpperCase[Math.floor(Math.random()*UpperCase.length)]
    Number = Number+LowerCase[Math.floor(Math.random()*LowerCase.length)]
    Number = Number+Numbers[Math.floor(Math.random()*Numbers.length)]
    Number = Number+Symbols[Math.floor(Math.random()*Symbols.length)]

    while(PassLength > Number.length){
        Number = Number+allpasschar[Math.floor(Math.random()*allpasschar.length)]
    }
    OutPutVal.value = Number;
}


const mediumallchar = LowerCase + UpperCase;
function MediumPass(){
    let Number1 = " ";
    Number1 = Number1+UpperCase[Math.floor(Math.random() * UpperCase.length)];
    Number1 = Number1+LowerCase[Math.floor(Math.random() * LowerCase.length)];
        while(PassLength > Number1.length){
            Number1 = Number1+mediumallchar[Math.floor(Math.random()*mediumallchar.length)];
        }
        OutPutVal.value = Number1;
}

MultipleValue.addEventListener("change",()=>{
    var selectedOption = MultipleValue.options[MultipleValue.selectedIndex];
    var SelectTEXT = selectedOption.text;
    console.log("Selected Text is  : "+SelectTEXT);
    // Head1.innerText = SelectTEXT;
if(SelectTEXT === "Low"){
    Generate.addEventListener("click",()=>{
        RandomNumber();
    })
}else if(SelectTEXT === "Medium"){
Generate.addEventListener("click",()=>{
MediumPass();
})
}else if(SelectTEXT === "High"){
    Generate.addEventListener("click",()=>{
        RandomPASS();
           })
}
})

Generate.addEventListener("click",()=>{
    RandomNumber();
})
const max = 100000000;
const min = 1000;
function RandomNumber(){
    rendomNumber = Math.floor(Math.random() * (max-min)) + min; 
 RandommobileNumber = rendomNumber.toString();
 OutPutVal.value = RandommobileNumber;
 console.log(RandommobileNumber);
}


