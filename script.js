let num1 = "";
let num2 = "";
let operator = "";
let ans = 0;
let decimalnumber = 0;
let isdec = 0; 
let b = document.querySelector (".display");
b.textContent = "";
function func(num) {
    if (operator === "") {
    let a = document.createElement("div");
    num1 += num;
    a.textContent = num1;
    let b = document.querySelector(".display");
    b.textContent = "";
    b.appendChild(a);
    }
    else {
    let a = document.createElement("div");
    num2 += num;
    a.textContent = num2;
    let b = document.querySelector(".display");
    b.textContent = "";
    b.appendChild(a);
    }

}

function add (e) {
    operator = "+";
    let a = document.createElement("div");
    a.textContent = " + "
    let b = document.querySelector(".display");
    b.textContent = "";
    b.appendChild(a);
}
function subtract (e) {
    operator = "-";
    let a = document.createElement("div");
    a.textContent = " - "
    let b = document.querySelector(".display");
    b.textContent = "";
    b.appendChild(a);
}
function multiply (e) {
    operator = "x";
    let a = document.createElement("div");
    a.textContent = " x "
    let b = document.querySelector(".display");
    b.textContent = "";
    b.appendChild(a);     
}
function divide (e) {
    operator = "÷";
    let a = document.createElement("div");
    a.textContent = " ÷ "
    let b = document.querySelector(".display");
    b.textContent = "";
    b.appendChild(a);    
}
function equal (e) {
    ans = 0;
    if (operator === "+") {
        ans = parseFloat(num1) + parseFloat(num2);
    }
    else if (operator === "-") {
        ans = parseFloat(num1) - parseFloat(num2);
    }
    else if (operator === "x") {
        ans = parseFloat(num1) * parseFloat(num2);
    }
    else {
        ans = parseFloat(num1) / parseFloat(num2);
    }

    ans = parseFloat (ans.toFixed(3));
    let a = document.createElement("div");
    a.textContent = ans
    let b = document.querySelector(".display");
    b.textContent = "";
    b.appendChild(a); 
    operator = "";
    num1 = ans;
    num2 = "";
}

function clear (e) {
    num1 = "";
    num2 = "";
    isdec = 0;
    decimalnumber = 0;
    operator = "";
    let a = document.querySelector (".display");
    a.textContent = "";
}

function percent (e) {
    operator = "%";
    ans = ans / 100;
    let a = document.createElement("div");
    a.textContent = ans
    let b = document.querySelector(".display");
    b.textContent = "";
    b.appendChild(a);
    num1 = ans;
    num2 = 0;
    operator = "";
}

let at7 = document.querySelector (".no7");
at7.addEventListener("click",() => func(7));

let at8 = document.querySelector (".no8");
at8.addEventListener("click",() => func(8));

let at9 = document.querySelector (".no9");
at9.addEventListener("click",() => func(9));

let at4 = document.querySelector (".no4");
at4.addEventListener("click",() => func(4));

let at5 = document.querySelector (".no5");
at5.addEventListener("click",() => func(5));

let at6 = document.querySelector (".no6");
at6.addEventListener("click",() => func(6));

let at1 = document.querySelector (".no1");
at1.addEventListener("click",() => func(1));

let at2 = document.querySelector (".no2");
at2.addEventListener("click",() => func(2));

let at3 = document.querySelector (".no3");
at3.addEventListener("click",() => func(3));

let at0 = document.querySelector (".no0");
at0.addEventListener("click",() => func(0));

let at00 = document.querySelector (".no00");
at00.addEventListener("click",() => func("00"));

let vadd = document.querySelector (".add");
vadd.addEventListener("click",add);

let vsubtract = document.querySelector (".subtract");
vsubtract.addEventListener("click",subtract);

let vmultiply = document.querySelector (".multiply");
vmultiply.addEventListener("click",multiply);

let vdivide = document.querySelector (".divide");
vdivide.addEventListener("click",divide);

let vequal = document.querySelector (".equal");
vequal.addEventListener("click", equal);

let vclear = document.querySelector (".clear");
vclear.addEventListener ("click", clear);

let vpercent = document.querySelector (".percentage");
vpercent.addEventListener ("click", percent);

let vpoint = document.querySelector (".decimal");
vpoint.addEventListener ("click", () => func("."));

document.addEventListener("keydown", iskey);
function iskey(e) {
    key = e.key;
  if (!isNaN(key)) {
    func(key);
  } 
  else if (key === ".") {
    func(".");
  } 
  else if (key === "+") {
    add();
  } 
  else if (key === "-") {
    subtract();
  } 
  else if (key === "*" || key === "x") {
    multiply();
  } 
  else if (key === "/") {
    divide();
  } 
  else if (key === "Enter" || key === "=") {
    equal();
  } 
  else if (key === "Escape" || key === "c") {
    clear();
  } 
  else if (key === "%") {
    percent();
  }
}
