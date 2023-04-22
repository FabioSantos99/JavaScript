let num = document.querySelector('#nummer');
let lista = document.querySelector('#flista');
let res = document.querySelector('#result')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 1050){
        return true;
    } else {
        return false;
    }
};

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    };
};

 function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicionar valores antes de finalizar')
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
          }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`

        res.innerHTML += `A média dos valores digitados é ${media}`
    }
}

function clean() {
    document.getElementById('result').innerHTML = "";
    document.getElementById('flista').innerHTML = "";

};




