
// wiring 
const inputText = document.querySelector("#text");
const convertBtn = document.querySelector("#convert-btn");
const caseArray = document.querySelectorAll(".case_div");

// text to array convetor (lowercase)
function inputToArray(){
    let str = inputText.value;
    let splitedText = str.split(" ");
    let smallerAll = splitedText.map(e => e.toLowerCase());
    return smallerAll
}

// text to array convetor (as it is)
function inputToArrayNLC(){
    let str = inputText.value;
    let splitedText = str.split(" ");
    return splitedText
}

// array to text convetor
function arrayToInput(arry){
    let converterText = arry.toString().replaceAll(",","")
    return converterText
}

// camel-case logic
function camel_case(){
    let textArray = inputToArray();
    let updatedText = [];
    for(let i=0; i<textArray.length ; i++){
        (i===0 ? updatedText.push(textArray[i]) : updatedText.push(textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1)))
    }
    return arrayToInput(updatedText)
}

// pascal-case logic
function pascal_case(){
    let textArray = inputToArray();
    let updatedText = [];
    for(let i=0; i<textArray.length ; i++){
        updatedText.push(textArray[i].charAt(0).toUpperCase() + 
        textArray[i].slice(1));
    }
    return arrayToInput(updatedText)
}

// snake-case logic
function snake_case(){
    let textArray = inputToArrayNLC();
    let updatedText = [];
    for(let i=0; i<textArray.length ; i++){
        (i%2 ===0) ? 
        updatedText.push(textArray[i]) : 
        updatedText.push(`_${textArray[i]}`)
    }
    return arrayToInput(updatedText)
}

// screaming-snake-case logic
function screaming_snake_case(){
    let textArray = inputToArray();
    let updatedText = [];
    for(let i=0; i<textArray.length ; i++){
        (i%2 ===0) ? 
        updatedText.push((textArray[i].toUpperCase())) : 
        updatedText.push(`_${textArray[i].toUpperCase()}`)
    }
    return arrayToInput(updatedText)
}

// kebab-case logic
function kebab_case(){
    let textArray = inputToArrayNLC();
    let updatedText = [];
    for(let i=0; i<textArray.length ; i++){
        (i%2 ===0) ? 
        updatedText.push(textArray[i]) : 
        updatedText.push(`-${textArray[i]}`)
    }
    return arrayToInput(updatedText)
}

// screaming-kebab-case logic
function screaming_kebab_case(){
    let textArray = inputToArray();
    let updatedText = [];
    for(let i=0; i<textArray.length ; i++){
        (i%2 ===0) ? 
        updatedText.push(textArray[i].toUpperCase()) : 
        updatedText.push(`-${textArray[i].toUpperCase()}`)
    }
    return arrayToInput(updatedText)
}

// event on click of btn
convertBtn.addEventListener("click", ()=>{
    let userInput = inputText.value;
    caseArray.forEach(e => {
        let caseName = e.querySelector("p") ;
        let newCaseName = caseName.getAttribute("id").replaceAll("-", "_");
        let evalutatedValue = eval(`${newCaseName}("${userInput}")`);
        caseName.innerText = evalutatedValue;
    })
})















// function xyz(){
//     console.log("test");
// }

// let caseName = "xyz" ;
// eval(`${caseName}()`)










