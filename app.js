let v1 = document.querySelector("#valor1");
let v2 = document.querySelector("#valor2");
let res = document.getElementById("resposta")

function somar(){
    res.textContent = Number(v1.value) + Number(v2.value);
}