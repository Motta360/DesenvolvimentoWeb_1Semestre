"use strict";

let vezes = document.getElementById("*"),mais = document.getElementById("+"),menos = document.getElementById("-"),barra = document.getElementById("/");

vezes.addEventListener("click",
    function () {
        let n1,n2,resultado;
        n1 = Number(document.getElementById("n1").value);
        n2 = Number(document.getElementById("n2").value);
        resultado = n1*n2;
        document.getElementById("resultado").value = resultado;
        
    }
)
mais.addEventListener("click",
    function () {
        let n1,n2,resultado;
        n1 = Number(document.getElementById("n1").value);
        n2 = Number(document.getElementById("n2").value);
        resultado = n1+n2;
        document.getElementById("resultado").value = resultado;
        
    }

)
menos.addEventListener("click",
    function () {
        let n1,n2,resultado;
        n1 = Number(document.getElementById("n1").value);
        n2 = Number(document.getElementById("n2").value);
        resultado = n1-n2;
        document.getElementById("resultado").value = resultado;
        
    }

)
barra.addEventListener("click",
    function () {
        let n1,n2,resultado;
        n1 = Number(document.getElementById("n1").value);
        n2 = Number(document.getElementById("n2").value);
        resultado = n1/n2;
        document.getElementById("resultado").value = resultado;
        
    }

)