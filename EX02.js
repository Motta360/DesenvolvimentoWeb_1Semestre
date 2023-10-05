"use strict";

let btn = document.getElementById("btn");
btn.addEventListener("click",
    function () {
        let num = document.getElementById("num").value;
        if (num%2 == 0) {
            document.getElementById("resultado").value = "Par"
        }
        else{
            document.getElementById("resultado").value = "Impar"
        }
        
    }
    )