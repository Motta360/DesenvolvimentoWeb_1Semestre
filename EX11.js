"use strict";

let btn = document.getElementById("btn");
btn.addEventListener("click",
    function () {
        let n1 = Number(document.getElementById("n1").value),i = n1,soma = n1;
        while (i-1>0){
            soma = soma + (i-1)
            i-=1
        }

        document.getElementById("resultado").value = soma

        
    }
)