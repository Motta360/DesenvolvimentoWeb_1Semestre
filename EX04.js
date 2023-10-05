"use strict";

let btn = document.getElementById("btn");
btn.addEventListener("click",
    function () {
        let base,altura,resultado;
        base = Number(document.getElementById("base").value);
        altura = Number(document.getElementById("altura").value);
        resultado = base*altura;
        document.getElementById("resultado").value = resultado
        
    }
)