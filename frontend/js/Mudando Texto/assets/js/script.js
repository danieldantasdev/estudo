var body = document.getElementsByTagName('body')[0];

body.style.backgroundColor = 'black'
body.style.fontSize = '150px'
body.style.color = 'white'


function muda(n){
    document.getElementById(n).style.color="#ffff00";
    }
    
function voltar(n){
    document.getElementById(n).style.color="#ff0000";
    }



var posicao = 0;
var mensagem = "Sua mensagem aqui";  //Esse texto

      function rola() {
      document.getElementById("lugar").innerHTML = 
        mensagem.substring(posicao,mensagem,length);
          posicao++;
        if (posicao == mensagem.length) {
             posicao = 0;
            }
        setTimeout("rola()", 130); 
   }



