let cpf = document.getElementById("gerador_cpf");

function gerarDigitos(){
    let numero = "";
    for(var i=0; i<9; i++){
        numero = numero + Math.floor(Math.random()*10).toString();
    }
    numero = gerarDigitoVerificador(numero);
    numero = gerarDigitoVerificador(numero);

    return numero
}

function gerarDigitoVerificador(numero=""){
    let cont = 2;
    let verificador = 0;
    for(var i=numero.length-1; i>=0; i--){
        verificador = verificador + parseInt(numero[i], 10) * cont++;
    }
    let resto = verificador % 11;
    if(resto < 2){
       return numero = numero + "0";
    }else{
       return numero = numero + (11-resto).toString()
    }

}


function gerarCPF(){
    let numero = gerarDigitos()
    numero = numero.substring(0,3)+"."+numero.substring(3,6)+"."+numero.substring(6,9)+"-"+numero.substring(9);
    cpf.innerHTML = numero;
}