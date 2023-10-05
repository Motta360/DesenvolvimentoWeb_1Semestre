"use strict";

let btn = document.getElementById("btn");

btn.addEventListener("click",
    function () {
        let valor,met,rvalor,metodo;
        valor = Number(document.getElementById("valor").value);
        met = Number(document.getElementById("met").value);

        switch (met) {
            case 1:
                rvalor = (valor*0.9).toFixed(2)
                metodo = "À vísta"
                break;
            case 2:
                rvalor = (valor*0.95).toFixed(2);
                metodo = "Cartão"
                break;
            case 3:
                rvalor = (valor*(1.1)).toFixed(2)
                metodo = "Parcelado"
                break;
            default:
                rvalor = "Erro"
                metodo = "Invalido"
                break;
        }
        document.getElementById("rvalor").value = "Pós desconto: " + rvalor
        document.getElementById("resultado").value = "Valor original: " + valor
        document.getElementById("metodo").value = "Método pagamento: " + metodo
        
    }
)