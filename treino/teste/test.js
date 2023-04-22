let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value))
}