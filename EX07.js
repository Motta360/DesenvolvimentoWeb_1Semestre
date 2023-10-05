"use strict";

let btn = document.getElementById("btn");

btn.addEventListener("click",
    function () {
        let peso,altura,IMC,sexo,resultado,parcial;
        peso = Number(document.getElementById("peso").value);
        altura= Number(document.getElementById("altura").value);
        sexo= document.getElementById("sexo").value;
        
        

        IMC = (peso/(altura**2)).toFixed(1)

        document.getElementById("escrita").innerHTML += "O IMC é: "+IMC+". <br>"
        if (sexo == 'M') {
            if(IMC<20.7){
                parcial = "abaixo do peso"
            }
            if(IMC>=20.7 && IMC < 26.4){
                parcial = "no peso normal"
            }
            if(IMC>=26.4 && IMC < 27.8){
                parcial = "marginalmente acima do peso"
            }
            if(IMC>=27.8 && IMC < 31.1){
                parcial = "acima do peso ideial"
            }
            if(IMC>=31.1){
                parcial = "Obeso"
            }
        }
        else{
            if(IMC<19.1){
                parcial = "abaixo do peso"
            }
            if(IMC>=19.1 && IMC < 25.8){
                parcial = "no peso normal"
            }
            if(IMC>=25.8 && IMC < 27.3){
                parcial = "marginalmente acima do peso"
            }
            if(IMC>=27.3 && IMC < 32.3){
                parcial = "acima do peso ideial"
            }
            if(IMC>=32.3){
                parcial = "Obeso"
            }
        }
        resultado = "Sua categoria é: "+ parcial
        document.getElementById("escrita").innerHTML += resultado + "<br>"
        
    }
)