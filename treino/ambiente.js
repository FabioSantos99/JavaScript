
function insert(num)

{var numero = document.getElementById('add').innerHTML;
document.getElementById('add').innerHTML = numero  +  num;
}

function clean() {
    document.getElementById('add').innerHTML = "";
}

function inLista(num, l) {
    if (l.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
    
    }














