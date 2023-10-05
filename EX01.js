"use strict";
let btn = document.getElementById("btn");
btn.addEventListener("click",
    function () {
        let valor,parcela,resultado
        valor = Number(document.getElementById("valor").value);
        parcela = Number(document.getElementById("parcela").value);

        switch (parcela) {
            case 1:
                resultado = valor;
                break;
            case 2: 
                resultado = (valor*1.03)/2
                break;
            case 4:
                resultado = (valor*1.07)/4
                break;
        
            default:
                resultado = "Número de Parcelas não disponível"
                break;
        }
        document.getElementById("resultado").value = resultado;
    }

)