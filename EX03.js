"use strict";

let btn = document.getElementById("btn");

btn.addEventListener("click",
    function () {
        let n1,n2,resultado;
        n1 = Number(document.getElementById("n1").value);
        n2 = Number(document.getElementById("n2").value);
        if(n1>n2){
            resultado = n1 + " é maior"
        }
        if (n2>n1) {
            resultado = n2 + " é maior"
        }
        if(n1 == n2){
            resultado = "São Iguais"
        }

        document.getElementById("resultado").value = resultado;
        
    }
)