"use strict";
let btn = document.getElementById("btn")
btn.addEventListener("click",
    function () {
        let salario = Number(document.getElementById("sal").value), imposto;
        if (salario <= 1434) {
            imposto = 0;
        }
        if (salario >1434 && salario<=2150) {
            imposto = salario*0.075;
        }
        if (salario >2150 && salario<=2866) {
            imposto = salario*0.15;
        }
        if (salario >2866 && salario<=3582) {
            imposto = salario*0.225;
        }
        if (salario > 3582) {
            imposto = salario*0.275;
        }

        document.getElementById("resultado").value = imposto.toFixed(2);
        
        
        
    }
)