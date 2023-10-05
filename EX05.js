"use strict";

let btn = document.getElementById("btn");

btn.addEventListener("click",
    function () {
        let n1,n2,n3,resultado,media;
        n1 = Number(document.getElementById("n1").value);
        n2 = Number(document.getElementById("n2").value);
        n3 = Number(document.getElementById("n3").value);
        media = (n1+n2+n3)/3;

        if(media>=6){
            resultado = "Conceito: APROVADO";
        }
        if(media>=3 && media<6 ){
            resultado = "Conceito: EXAME";
        }
        if(media<3){
            resultado = "Conceito: REPROVADO";
        }
        
        document.getElementById("resultado").value = resultado;
        document.getElementById("media").value = "Média: "+media;
    }
)