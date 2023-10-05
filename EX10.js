"use strict";

let btn = document.getElementById("btn");
btn.addEventListener("click",
    function () {
        let n1,resultado,i,inicio;
        n1 = Number(document.getElementById("n1").value);
        i = n1;
        inicio = n1;
        
        while (i-1 >0){
            inicio = inicio*(i-1)
            i-=1
        }
        document.getElementById("resultado").value = inicio


        
    }
)