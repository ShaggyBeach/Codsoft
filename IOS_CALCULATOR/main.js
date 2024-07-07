const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const decimal = document.querySelector('.decimal');

let first = "";
let isfirst = false;
let second = "";
let isecond = false;
let sign = "";
let resultValue = 0;

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr =  e.target.getAttribute('value');
        if(isfirst === false){
            getfirst(atr);
        }
        getSign();
        if(isecond === false){
            getSecondValue(atr);
        }
        result.innerHTML = first + sign + second;
    })
}

function getfirst(el) {
    result.innerHTML = "";
    first += el;
    result.innerHTML = first;
    first = +first;
}

function getSecondValue(el) {
    if(first !="" && sign != ""){
        second += el;
        result.innerHTML = second;
        second = +second;
    }
}

function getSign(){
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click',(e) => {
            sign = e.target.getAttribute('value');
            isfirst = true;
        })
    }
}


equals.addEventListener('click',() => {
    result.innerHTML = "";

    if(sign === "+") {
        resultValue = first + second;
    } else if(sign === "-"){
        resultValue = first - second;
    } else if(sign === "x"){
        resultValue = first * second;
    } else if(sign === "/"){
        resultValue = first / second;
    }
    result.innerHTML = resultValue;
    first = resultValue;
    second = "";

    checkResultLenght();
    AC();
})

function checkResultLenght() {
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8) {
    resultValue = JSON.parse(resultValue);
    result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML ="";
    if(first != "") {
        resultValue = -first;
        first = resultValue;
    }
    if(first != "" && second != "" && sign != ""){
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;

})

percent.addEventListener('click', () => {
    result.innerHTML ="";
    if(first != "") {
        resultValue = first / 100;
        first = resultValue;
    }
    if(first != "" && second != "" && sign != ""){
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
})

decimal.addEventListener('click', ()=>{
    result.innerHTML = "";
    
    if(first.includes(".")){
        resultValue += 0.1*second;
    }
    else{
        resultValue = first + ".";
        first = resultValue;
    }
    result.innerHTML = resultValue
})


clear.addEventListener('click', () => {
    
    result.innerHTML =0;

    
    first = "";
    isFirstValue = false;
    second = "";
    isecond = false;
    sign = "";
    resultValue = 0;
    
})
