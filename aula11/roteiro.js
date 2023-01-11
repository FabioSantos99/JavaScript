function resultado() {

var texto = document.getElementsByName("radpais").value
var res = document.getElementById('#res')
texto =texto.toUppercase();

if(radpais[0].checked) {
    res.innerHTML = "Você é do Brasil!!"
}
else(radpais[1].checked) {
    res.innerHTML = "Bem vindo, o que acha do Brasil!"
}

}