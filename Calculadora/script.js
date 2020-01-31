
var n1 = "0"
var n2= ''

function incluirDigito(numero){

    if (n2 && operacao && igual) {
        igual = false;
        apagar();
        n1 = numero;
        document.querySelector("#display").innerHTML= n1;
        return
    } 
    
    if(operacao != null){
        n2 += numero;
        document.querySelector('#display').innerHTML = n2;
    }else {
        if (n1 == "0"){
            n1 = numero;
        }else{
            n1 +=numero;
        }
        document.querySelector('#display').innerHTML = n1;
    }
    


}

function calcular(){
    var nCalcula = 0;
    var _n1= parseFloat(n1);
    var _n2= parseFloat(n2);

    switch (operacao){
        case '+':
        nCalcula = _n1 + _n2;
        break;
    
        case '-':
        nCalcula = _n1 - _n2;
        break;
    
        case 'x':
        nCalcula = _n1 * _n2;
        break;
    
        case '÷':
        nCalcula = _n1 / _n2;
        break;
    }
    return Math.round(nCalcula *100000) / 100000;   
}




var operacao = null;

function calculo(simbolo){

    if(igual){
        igual = false;
        n2 = '';
    }
    
    
    if (operacao == null || n2 == ''){
        operacao = simbolo;
    }else{
      var resultado = calcular();
      n1 = resultado;
      operacao = simbolo;
      n2 = '';
      document.querySelector("#display").innerHTML = n1;
    }
    
    console.log(n1, n2, resultado, )

}

var igual = false;

function finalizarCalculo(){
    igual = true;
    var resultado = calcular();
    n1 = resultado;
    document.querySelector("#display").innerHTML = n1;
}

function apagar(){
    n1 = '0'
    operacao = null;
    n2 = ''
    document.querySelector('#display').innerHTML = n1;
}

function porcentagem(){
    if(!n2){
        apagar();
        document.querySelector("#display").innerHTML = n1;
    }else{
        var porcentagem =  n1*n2 / 100;
        n2 = porcentagem;
        document.querySelector("#display").innerHTML = n2;
    }

    
}