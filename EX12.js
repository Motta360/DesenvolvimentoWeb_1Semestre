"use strict";
let btn = document.getElementById("start");
document.getElementById("status").value = "Parado"
btn.addEventListener("click",
    function () {
        document.getElementById("status").value = "Jogo Iniciado"
        let gerado, n1,chute,tentativa =1 ;
        gerado = Math.round(Math.random()*100);
        chute = document.getElementById("chutar")
        chute.addEventListener("click",
            function () {
                n1 = document.getElementById("n1").value;
                if(n1 == gerado){
                    let x = confirm("Parabens você ganhou! Tentativas: "+tentativa+" Deseja Repetir?");
                    if (x) {
                        location.reload();
                        
                    }
                }
                else{
                    document.getElementById("resultado").innerHTML += "Errou! tente novamente <br>"
                    tentativa+=1
                }
                
            }
        )


        
    }

)
    