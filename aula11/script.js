function resultado() {

    var texto = document.getElementById("txtvel").value;
    texto = texto.toUpperCase(); //garantir caixa alta
    
    document.getElementById("res").innerHTML = ""; //limpar no inicio
    
    if ( texto == "RUSSIA") {
    
    document.getElementById("res").innerHTML = "Você é um cidadão russo";
    
    }
    
    if ( texto == "EUA") {
    
    document.getElementById("res").innerHTML = "Você é um cidadão americano";
    
    }
    
    
    }